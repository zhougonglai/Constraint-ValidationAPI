import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: () => {
		return {
			role: 'user',
			form: {
				age: {
					value: '',
					type: Number,
					placeholder: '年龄',
					required: true,
					min: 18,
					max: 60
				},
				firstName: {
					value: '',
					type: String,
					placeholder: '姓氏',
					required: true,
					validator: str => {
						return str.startsWith(String.toUpperCase(str.charAt(0)));
					}
				},
				middleName: {
					value: '',
					type: String,
					placeholder: '中间名'
				},
				lastName: {
					value: '',
					type: String,
					placeholder: '名字',
					required: true,
					validator: str => {
						return str.startsWith(String.toUpperCase(str.charAt(0)));
					}
				},
				bankCard: {
					roleQuery: ['admin', 'vip', 'svip'],
					value: '',
					type: Number,
					placeholder: '银行卡',
					minlength: 12,
					maxlength: 19
				}
			}
		};
	},
	mutations: () => {
		return {
			increment(state) {
				state.count++;
			}
		};
	}
});
