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

export const language = <languages.IMonarchLanguage>{
	defaultToken: '',
	tokenPostfix: '.erlang',

	keywords: [
		'after',
		'begin',
		'case',
		'catch',
		'cond',
		'end',
		'fun',
		'if',
		'let',
		'of',
		'receive',
		'try',
		'when'
	],

	// Word-form operators
	operatorWords: [
		'andalso',
		'orelse',
		'band',
		'bor',
		'bnot',
		'bsl',
		'bsr',
		'bxor',
		'div',
		'rem',
		'not',
		'and',
		'or',
		'xor'
	],

	// Symbolic operators
	operators: [
		'->',
		'=>',
		':-',
		'::',
		'||',
		'|',
		'==',
		'=:=',
		'=/=',
		'/=',
		'=<',
		'>=',
		'<',
		'>',
		'=',
		'++',
		'--',
		'+',
		'-',
		'*',
		'/',
		'!',
		'?'
	],

	symbols: /[=><!~?:&|+\-*\/\^%]+/,

	escapes: /\\(?:[abfnrtv\\"'\n]|\d{1,3}|x[0-9A-Fa-f]{2}|x\{[0-9A-Fa-f]+\})/,

	tokenizer: {
		root: [
			// module attributes, e.g. -module(foo). / -export([bar/1]).
			[/-\s*[a-z][a-zA-Z0-9_]*/, 'keyword.directive'],

			// whitespace and comments
			{ include: '@whitespace' },

			// variables (leading uppercase letter or underscore)
			[/[A-Z_][a-zA-Z0-9_]*/, 'variable'],

			// character literal: $c or $\escape
			[/\$\\?./, 'number.char'],

			// base#value numbers, e.g. 16#1F, 2#101
			[/\d+#[0-9a-zA-Z]+/, 'number.hex'],

			// floats
			[/\d+\.\d+([eE][\-+]?\d+)?/, 'number.float'],

			// integers
			[/\d+/, 'number'],

			// quoted atoms
			[/'([^'\\]|\\.)*'/, 'atom.quoted'],

			// strings
			[/"/, { token: 'string.quote', next: '@string' }],

			// atoms / keywords / word-operators
			[
				/[a-z][a-zA-Z0-9_]*/,
				{
					cases: {
						'@keywords': 'keyword',
						'@operatorWords': 'operator.word',
						'@default': 'atom'
					}
				}
			],

			// delimiters and brackets
			[/[{}()\[\]]/, '@brackets'],
			[/[,;.:]/, 'delimiter'],

			[
				/@symbols/,
				{
					cases: {
						'@operators': 'operator',
						'@default': ''
					}
				}
			]
		],

		whitespace: [
			[/[ \t\r\n]+/, ''],
			[/%.*$/, 'comment']
		],

		string: [
			[/[^\\"]+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/"/, { token: 'string.quote', next: '@pop' }]
		]
	}
};
