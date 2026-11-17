#!/usr/bin/env node
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const appSrc = fs.readFileSync(path.join(root, 'diagnose/app.js'), 'utf8');
const cssSrc = fs.readFileSync(path.join(root, 'diagnose/style.css'), 'utf8');
// 诊断页不再提供任何提交 Issue 入口：无 Issue 链接、无题目报错链接。
assert.ok(!appSrc.includes('ISSUE_NEW_URL'));
assert.ok(!appSrc.includes('function reportUrl(q)'));
assert.ok(!appSrc.includes('这道题有错？报错'));
assert.ok(!appSrc.includes('report-link'));
assert.ok(!appSrc.includes('report-q'));
assert.ok(!appSrc.includes('github.com'));
assert.ok(!cssSrc.includes('.report-link'));
console.log('test_report_link: ok');
