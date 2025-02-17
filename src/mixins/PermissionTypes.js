/**
 * @copyright Copyright (c) 2021 Jonas Rittershofer <jotoeri@users.noreply.github.com>
 *
 * @author Jonas Rittershofer <jotoeri@users.noreply.github.com>
 *
 * @license AGPL-3.0-or-later
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

export default {
	data() {
		return {
			/**
			 * !!! Keep in Sync with lib/Constants.php !!
			 */
			PERMISSION_TYPES: {
				PERMISSION_EDIT: 'edit',
				PERMISSION_RESULTS: 'results',
				PERMISSION_RESULTS_DELETE: 'results_delete',
				PERMISSION_SUBMIT: 'submit',
				PERMISSION_ALL: [this.PERMISSION_EDIT, this.PERMISSION_RESULTS, this.PERMISSION_RESULTS_DELETE, this.PERMISSION_SUBMIT],
			},
		}
	},
}
