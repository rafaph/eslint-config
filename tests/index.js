const assert = require('assert');
const eslint = require('eslint');
const path = require('path');
const { readFileSync } = require('fs');

const linter = new eslint.CLIEngine({
  configFile: path.join(__dirname, '..', 'eslintrc.json')
});

const fixturesPath = path.join(__dirname, 'fixtures');

const fixtures = {
  spaceBeforeFunctionParen: {
    asyncArrow: readFileSync(path.join(fixturesPath, 'space-before-function-paren', 'asyncArrow.js'), {
      encoding: 'utf-8'
    }),
    anonymous: readFileSync(path.join(fixturesPath, 'space-before-function-paren', 'anonymous.js'), {
      encoding: 'utf-8'
    }),
    named: readFileSync(path.join(fixturesPath, 'space-before-function-paren', 'named.js'), {
      encoding: 'utf-8'
    })
  },
  indent: {
    SwitchCase: readFileSync(path.join(fixturesPath, 'indent', 'SwitchCase.js'), {
      encoding: 'utf-8'
    })
  }
};

describe('space-before-function-paren tests', () => {
  const { spaceBeforeFunctionParen } = fixtures;

  it('Test asyncArrow', () => {
    const result = linter.executeOnText(spaceBeforeFunctionParen.asyncArrow);
    assert.strictEqual(
      result.results[0].messages[0].message,
      'Missing space before function parentheses.'
    );
  });

  it('Test anonymous', () => {
    const result = linter.executeOnText(spaceBeforeFunctionParen.anonymous);
    assert.strictEqual(
      result.results[0].messages[0].message,
      'Unexpected space before function parentheses.'
    );
  });

  it('Test named', () => {
    const result = linter.executeOnText(spaceBeforeFunctionParen.named);
    assert.strictEqual(
      result.results[0].messages[0].message,
      'Unexpected space before function parentheses.'
    );
  });
});

describe('indent tests', () => {
  const { indent } = fixtures;

  it('Test SwitchCase', () => {
    const result = linter.executeOnText(indent.SwitchCase);
    assert.strictEqual(
      result.results[0].messages[0].message,
      'Expected indentation of 2 spaces but found 0.'
    );
  });
});