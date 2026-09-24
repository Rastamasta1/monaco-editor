/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { testTokenization } from '../test/testRunner';

testTokenization('erlang', [
	// a keyword
	[
		{
			line: 'case',
			tokens: [{ startIndex: 0, type: 'keyword.erlang' }]
		}
	],

	// an atom
	[
		{
			line: 'foo',
			tokens: [{ startIndex: 0, type: 'atom.erlang' }]
		}
	],

	// a variable
	[
		{
			line: 'X',
			tokens: [{ startIndex: 0, type: 'variable.erlang' }]
		}
	],

	// a % comment
	[
		{
			line: '% comment',
			tokens: [{ startIndex: 0, type: 'comment.erlang' }]
		}
	]
]);
