/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type { languages } from '../../../editor';

export const conf: languages.LanguageConfiguration = {
	comments: {
		lineComment: '%'
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"', notIn: ['string', 'comment'] },
		{ open: "'", close: "'", notIn: ['string', 'comment'] }
	],
	surroundingPairs: [
		{ open: '{', close: '}' },
		{ open: '[', close: ']' },
		{ open: '(', close: ')' },
		{ open: '"', close: '"' },
		{ open: "'", close: "'" }
	]
};

/**
 * A Monarch lexer for the Erlang language.
 *
 * References:
 *
 * * Monarch documentation - https://microsoft.github.io/monaco-editor/monarch.html
 * * Erlang Reference Manual - https://www.erlang.org/doc/reference_manual/introduction.html
 */
export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.erlang',

	brackets: [
		{ open: '[', close: ']', token: 'delimiter.square' },
		{ open: '(', close: ')', token: 'delimiter.parenthesis' },
		{ open: '{', close: '}', token: 'delimiter.curly' },
		{ open: '<<', close: '>>', token: 'delimiter.angle.special' }
	],

	keywords: [
		'after',
		'and',
		'andalso',
		'band',
		'begin',
		'bnot',
		'bor',
		'bsl',
		'bsr',
		'bxor',
		'case',
		'catch',
		'cond',
		'div',
		'end',
		'fun',
		'if',
		'let',
		'maybe',
		'not',
		'of',
		'or',
		'orelse',
		'receive',
		'rem',
		'try',
		'when',
		'xor'
	],

	directives: [
		'module',
		'export',
		'export_type',
		'import',
		'define',
		'record',
		'include',
		'include_lib',
		'spec',
		'type',
		'opaque',
		'callback',
		'behaviour',
		'behavior',
		'compile',
		'on_load'
	],

	// See https://www.erlang.org/doc/reference_manual/data_types.html#variable
	variableName: /[A-Z_][a-zA-Z0-9_]*/,

	// See https://www.erlang.org/doc/reference_manual/data_types.html#atom
	atomName: /[a-z][a-zA-Z0-9_]*/,

	escape: /\\(?:[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-fA-F]+;|x\{[0-9a-fA-F]+\}|[0-7]{1,3})/,

	tokenizer: {
		root: [
			{ include: '@whitespace' },
			{ include: '@comments' },
			{ include: '@directives' },
			{ include: '@macros' },
			{ include: '@numbers' },
			{ include: '@characters' },
			{ include: '@strings' },
			{ include: '@quotedAtoms' },
			{ include: '@identifiers' },
			{ include: '@symbols' }
		],

		// Whitespace

		whitespace: [[/\s+/, 'white']],

		// Comments

		comments: [[/%.*$/, 'comment']],

		// Module attributes, e.g. -module(foo). -export([foo/1]).

		directives: [
			[
				/(-)(\s*)(@atomName)/,
				[
					'operator',
					'white',
					{
						cases: {
							'@directives': 'keyword.directive',
							'@default': 'identifier'
						}
					}
				]
			]
		],

		// Macros, e.g. ?MODULE, ?LINE, ?MY_MACRO

		macros: [[/\?\s*[A-Za-z_][A-Za-z0-9_@]*/, 'variable.predefined']],

		// Numbers

		numbers: [
			// Base#Digits notation, e.g. 16#1f, 2#101
			[/\d+#[0-9a-zA-Z]+/, 'number'],
			[/\d+\.\d+(?:[eE][+-]?\d+)?/, 'number.float'],
			[/\d+/, 'number']
		],

		// Character literals, e.g. $a, $\n

		characters: [
			[/\$\\./, 'number.constant'],
			[/\$./, 'number.constant']
		],

		// Strings

		strings: [[/"/, { token: 'string.quote', next: '@string' }]],

		string: [
			[/[^\\"]+/, 'string'],
			[/@escape/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/"/, { token: 'string.quote', next: '@pop' }]
		],

		// Quoted atoms, e.g. 'foo bar'

		quotedAtoms: [[/'/, { token: 'string.quote', next: '@quotedAtom' }]],

		quotedAtom: [
			[/[^\\']+/, 'string'],
			[/@escape/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/'/, { token: 'string.quote', next: '@pop' }]
		],

		// Variables and (unquoted) atoms

		identifiers: [
			[/@variableName/, 'variable'],
			[
				/@atomName/,
				{
					cases: {
						'@keywords': 'keyword',
						'@default': 'identifier'
					}
				}
			]
		],

		// Operators, punctuation and brackets

		symbols: [
			[/<<|>>/, '@brackets'],
			[/[()\[\]{}]/, '@brackets'],
			[/=:=|=\/=|=<|>=|==|\/=|->|<-|\+\+|--|\|\|/, 'operator'],
			[/[=<>+\-*/!]/, 'operator'],
			[/[.,;:|#]/, 'delimiter']
		]
	}
};
