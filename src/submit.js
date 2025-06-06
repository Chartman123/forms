/**
 * SPDX-FileCopyrightText: 2020 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

import { translate, translatePlural } from '@nextcloud/l10n'
import Vue from 'vue'

import FormsSubmitRoot from './FormsSubmit.vue'

// eslint-disable-next-line import/no-unresolved, n/no-missing-import
import 'vite/modulepreload-polyfill'

Vue.prototype.t = translate
Vue.prototype.n = translatePlural

export default new Vue({
	el: '#content',
	// eslint-disable-next-line vue/match-component-file-name
	name: 'FormsSubmitRoot',
	render: (h) => h(FormsSubmitRoot),
})
