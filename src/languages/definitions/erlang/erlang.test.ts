/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { testTokenization } from '../test/testRunner';

testTokenization('erlang', [
	// Comments
	[
		{
			line: '% this is a comment',
			tokens: [{ startIndex: 0, type: 'comment.erlang' }]
		}
	],
	// Keywords
	[
		{
			line: 'after and andalso band begin bnot bor bsl bsr bxor case catch cond div end fun if let maybe not of or orelse receive rem try when xor',
			tokens: [
				{ startIndex: 0, type: 'keyword.erlang' },
				{ startIndex: 5, type: 'white.erlang' },
				{ startIndex: 6, type: 'keyword.erlang' },
				{ startIndex: 9, type: 'white.erlang' },
				{ startIndex: 10, type: 'keyword.erlang' },
				{ startIndex: 17, type: 'white.erlang' },
				{ startIndex: 18, type: 'keyword.erlang' },
				{ startIndex: 22, type: 'white.erlang' },
				{ startIndex: 23, type: 'keyword.erlang' },
				{ startIndex: 28, type: 'white.erlang' },
				{ startIndex: 29, type: 'keyword.erlang' },
				{ startIndex: 33, type: 'white.erlang' },
				{ startIndex: 34, type: 'keyword.erlang' },
				{ startIndex: 37, type: 'white.erlang' },
				{ startIndex: 38, type: 'keyword.erlang' },
				{ startIndex: 41, type: 'white.erlang' },
				{ startIndex: 42, type: 'keyword.erlang' },
				{ startIndex: 45, type: 'white.erlang' },
				{ startIndex: 46, type: 'keyword.erlang' },
				{ startIndex: 50, type: 'white.erlang' },
				{ startIndex: 51, type: 'keyword.erlang' },
				{ startIndex: 55, type: 'white.erlang' },
				{ startIndex: 56, type: 'keyword.erlang' },
				{ startIndex: 61, type: 'white.erlang' },
				{ startIndex: 62, type: 'keyword.erlang' },
				{ startIndex: 66, type: 'white.erlang' },
				{ startIndex: 67, type: 'keyword.erlang' },
				{ startIndex: 70, type: 'white.erlang' },
				{ startIndex: 71, type: 'keyword.erlang' },
				{ startIndex: 74, type: 'white.erlang' },
				{ startIndex: 75, type: 'keyword.erlang' },
				{ startIndex: 78, type: 'white.erlang' },
				{ startIndex: 79, type: 'keyword.erlang' },
				{ startIndex: 81, type: 'white.erlang' },
				{ startIndex: 82, type: 'keyword.erlang' },
				{ startIndex: 85, type: 'white.erlang' },
				{ startIndex: 86, type: 'keyword.erlang' },
				{ startIndex: 91, type: 'white.erlang' },
				{ startIndex: 92, type: 'keyword.erlang' },
				{ startIndex: 95, type: 'white.erlang' },
				{ startIndex: 96, type: 'keyword.erlang' },
				{ startIndex: 98, type: 'white.erlang' },
				{ startIndex: 99, type: 'keyword.erlang' },
				{ startIndex: 101, type: 'white.erlang' },
				{ startIndex: 102, type: 'keyword.erlang' },
				{ startIndex: 108, type: 'white.erlang' },
				{ startIndex: 109, type: 'keyword.erlang' },
				{ startIndex: 116, type: 'white.erlang' },
				{ startIndex: 117, type: 'keyword.erlang' },
				{ startIndex: 120, type: 'white.erlang' },
				{ startIndex: 121, type: 'keyword.erlang' },
				{ startIndex: 124, type: 'white.erlang' },
				{ startIndex: 125, type: 'keyword.erlang' },
				{ startIndex: 129, type: 'white.erlang' },
				{ startIndex: 130, type: 'keyword.erlang' }
			]
		}
	],
	// Module attributes
	[
		{
			line: '-module(foo).',
			tokens: [
				{ startIndex: 0, type: 'operator.erlang' },
				{ startIndex: 1, type: 'keyword.directive.erlang' },
				{ startIndex: 7, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 8, type: 'identifier.erlang' },
				{ startIndex: 11, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 12, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: '-export([foo/1, bar/2]).',
			tokens: [
				{ startIndex: 0, type: 'operator.erlang' },
				{ startIndex: 1, type: 'keyword.directive.erlang' },
				{ startIndex: 7, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 8, type: 'delimiter.square.erlang' },
				{ startIndex: 9, type: 'identifier.erlang' },
				{ startIndex: 12, type: 'operator.erlang' },
				{ startIndex: 13, type: 'number.erlang' },
				{ startIndex: 14, type: 'delimiter.erlang' },
				{ startIndex: 15, type: 'white.erlang' },
				{ startIndex: 16, type: 'identifier.erlang' },
				{ startIndex: 19, type: 'operator.erlang' },
				{ startIndex: 20, type: 'number.erlang' },
				{ startIndex: 21, type: 'delimiter.square.erlang' },
				{ startIndex: 22, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 23, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: '-define(MAX, 100).',
			tokens: [
				{ startIndex: 0, type: 'operator.erlang' },
				{ startIndex: 1, type: 'keyword.directive.erlang' },
				{ startIndex: 7, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 8, type: 'variable.erlang' },
				{ startIndex: 11, type: 'delimiter.erlang' },
				{ startIndex: 12, type: 'white.erlang' },
				{ startIndex: 13, type: 'number.erlang' },
				{ startIndex: 16, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 17, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: '-record(point, {x, y}).',
			tokens: [
				{ startIndex: 0, type: 'operator.erlang' },
				{ startIndex: 1, type: 'keyword.directive.erlang' },
				{ startIndex: 7, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 8, type: 'identifier.erlang' },
				{ startIndex: 13, type: 'delimiter.erlang' },
				{ startIndex: 14, type: 'white.erlang' },
				{ startIndex: 15, type: 'delimiter.curly.erlang' },
				{ startIndex: 16, type: 'identifier.erlang' },
				{ startIndex: 17, type: 'delimiter.erlang' },
				{ startIndex: 18, type: 'white.erlang' },
				{ startIndex: 19, type: 'identifier.erlang' },
				{ startIndex: 20, type: 'delimiter.curly.erlang' },
				{ startIndex: 21, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 22, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: '-include("foo.hrl").',
			tokens: [
				{ startIndex: 0, type: 'operator.erlang' },
				{ startIndex: 1, type: 'keyword.directive.erlang' },
				{ startIndex: 8, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 9, type: 'string.quote.erlang' },
				{ startIndex: 10, type: 'string.erlang' },
				{ startIndex: 17, type: 'string.quote.erlang' },
				{ startIndex: 18, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 19, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: '-spec foo(integer()) -> integer().',
			tokens: [
				{ startIndex: 0, type: 'operator.erlang' },
				{ startIndex: 1, type: 'keyword.directive.erlang' },
				{ startIndex: 5, type: 'white.erlang' },
				{ startIndex: 6, type: 'identifier.erlang' },
				{ startIndex: 9, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 10, type: 'identifier.erlang' },
				{ startIndex: 17, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 20, type: 'white.erlang' },
				{ startIndex: 21, type: 'operator.erlang' },
				{ startIndex: 23, type: 'white.erlang' },
				{ startIndex: 24, type: 'identifier.erlang' },
				{ startIndex: 31, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 33, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: '-type foo() :: integer().',
			tokens: [
				{ startIndex: 0, type: 'operator.erlang' },
				{ startIndex: 1, type: 'keyword.directive.erlang' },
				{ startIndex: 5, type: 'white.erlang' },
				{ startIndex: 6, type: 'identifier.erlang' },
				{ startIndex: 9, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 11, type: 'white.erlang' },
				{ startIndex: 12, type: 'delimiter.erlang' },
				{ startIndex: 14, type: 'white.erlang' },
				{ startIndex: 15, type: 'identifier.erlang' },
				{ startIndex: 22, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 24, type: 'delimiter.erlang' }
			]
		}
	],
	// Macros
	[
		{
			line: 'X = ?MAX + 1,',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'variable.predefined.erlang' },
				{ startIndex: 8, type: 'white.erlang' },
				{ startIndex: 9, type: 'operator.erlang' },
				{ startIndex: 10, type: 'white.erlang' },
				{ startIndex: 11, type: 'number.erlang' },
				{ startIndex: 12, type: 'delimiter.erlang' }
			]
		}
	],
	// Numbers - integers and base notation
	[
		{
			line: 'Y = 16#1F,',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'number.erlang' },
				{ startIndex: 9, type: 'delimiter.erlang' }
			]
		}
	],
	// Numbers - floats
	[
		{
			line: 'F = 3.14,',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'number.float.erlang' },
				{ startIndex: 8, type: 'delimiter.erlang' }
			]
		}
	],
	// Character literals
	[
		{
			line: 'C = $a,',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'number.constant.erlang' },
				{ startIndex: 6, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: 'D = $\\n,',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'number.constant.erlang' },
				{ startIndex: 7, type: 'delimiter.erlang' }
			]
		}
	],
	// Strings
	[
		{
			line: 'S = "hello world",',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'string.quote.erlang' },
				{ startIndex: 5, type: 'string.erlang' },
				{ startIndex: 16, type: 'string.quote.erlang' },
				{ startIndex: 17, type: 'delimiter.erlang' }
			]
		}
	],
	// Quoted atoms
	[
		{
			line: "A = 'quoted atom',",
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'string.quote.erlang' },
				{ startIndex: 5, type: 'string.erlang' },
				{ startIndex: 16, type: 'string.quote.erlang' },
				{ startIndex: 17, type: 'delimiter.erlang' }
			]
		}
	],
	// Atoms, variables, functions and operators
	[
		{
			line: 'foo(X) when X > 0 -> X + 1;',
			tokens: [
				{ startIndex: 0, type: 'identifier.erlang' },
				{ startIndex: 3, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 4, type: 'variable.erlang' },
				{ startIndex: 5, type: 'delimiter.parenthesis.erlang' },
				{ startIndex: 6, type: 'white.erlang' },
				{ startIndex: 7, type: 'keyword.erlang' },
				{ startIndex: 11, type: 'white.erlang' },
				{ startIndex: 12, type: 'variable.erlang' },
				{ startIndex: 13, type: 'white.erlang' },
				{ startIndex: 14, type: 'operator.erlang' },
				{ startIndex: 15, type: 'white.erlang' },
				{ startIndex: 16, type: 'number.erlang' },
				{ startIndex: 17, type: 'white.erlang' },
				{ startIndex: 18, type: 'operator.erlang' },
				{ startIndex: 20, type: 'white.erlang' },
				{ startIndex: 21, type: 'variable.erlang' },
				{ startIndex: 22, type: 'white.erlang' },
				{ startIndex: 23, type: 'operator.erlang' },
				{ startIndex: 24, type: 'white.erlang' },
				{ startIndex: 25, type: 'number.erlang' },
				{ startIndex: 26, type: 'delimiter.erlang' }
			]
		}
	],
	// Lists and tuples (brackets and delimiters)
	[
		{
			line: 'L = [1, 2, 3],',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'delimiter.square.erlang' },
				{ startIndex: 5, type: 'number.erlang' },
				{ startIndex: 6, type: 'delimiter.erlang' },
				{ startIndex: 7, type: 'white.erlang' },
				{ startIndex: 8, type: 'number.erlang' },
				{ startIndex: 9, type: 'delimiter.erlang' },
				{ startIndex: 10, type: 'white.erlang' },
				{ startIndex: 11, type: 'number.erlang' },
				{ startIndex: 12, type: 'delimiter.square.erlang' },
				{ startIndex: 13, type: 'delimiter.erlang' }
			]
		}
	],
	[
		{
			line: 'T = {a, b, c},',
			tokens: [
				{ startIndex: 0, type: 'variable.erlang' },
				{ startIndex: 1, type: 'white.erlang' },
				{ startIndex: 2, type: 'operator.erlang' },
				{ startIndex: 3, type: 'white.erlang' },
				{ startIndex: 4, type: 'delimiter.curly.erlang' },
				{ startIndex: 5, type: 'identifier.erlang' },
				{ startIndex: 6, type: 'delimiter.erlang' },
				{ startIndex: 7, type: 'white.erlang' },
				{ startIndex: 8, type: 'identifier.erlang' },
				{ startIndex: 9, type: 'delimiter.erlang' },
				{ startIndex: 10, type: 'white.erlang' },
				{ startIndex: 11, type: 'identifier.erlang' },
				{ startIndex: 12, type: 'delimiter.curly.erlang' },
				{ startIndex: 13, type: 'delimiter.erlang' }
			]
		}
	]
]);
