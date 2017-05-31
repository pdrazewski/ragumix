import test from 'ava';
import _ from 'underscore';
import Vue from 'vue'
import visualEditor from '../../../src/components/visualEditor.vue'


/**
* visualEditor should have default data defined
* colorPicker initialize correctly
* range slider ininitalize correctly
* firebase connection works correctly
* no-internet firebase fallback?
* saving method work correct
* creating new firebase key works ok
* change width in editor affect scene div
* change height in editor affect scene div
* change border-radius in editor affect scene div
* change background-color in editor affect scene div
* data-validation in input forms works ok (0 not allowed for width and height)
* test picker on drag method?
*/

test('visualEditor should have default data defined', t => {
  	t.truthy(typeof visualEditor.data().name)
  	t.truthy(typeof visualEditor.data().bgcolor)
  	t.truthy(typeof visualEditor.data().width)
  	t.truthy(typeof visualEditor.data().height)
  	t.truthy(typeof visualEditor.data().radius)
  	t.truthy(typeof visualEditor.data().newKey)
  	t.truthy(typeof visualEditor.data().saved)
})
