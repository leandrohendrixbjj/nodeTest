import assert from 'node:assert/strict'

// Validate two values
assert.strictEqual(1, 1)

// Validate two objects
assert.deepEqual({ a: 1 }, { a: 1 })