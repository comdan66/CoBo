"use strict";/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2021, Lalilo
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */Vue.component("form-messages",{props:{messages:{type:Array,default:[],required:!0}},template:El.render("\n    template => *if=messages.length\n      div._error => *for=({ type, title, contents }, i) in messages   :key=i   :class=type\n        b => *if=title   *text=title\n        span => *for=(content, j) in contents   :key=j   *text=content\n  ")});