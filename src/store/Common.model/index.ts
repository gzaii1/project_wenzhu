/**
 * 公共状态存储空间
 *  theme: 主题
 *  setTheme: 修改主题方法 
 */ 

import { types, Instance } from 'mobx-state-tree'
export interface ICommonModel extends Instance<typeof CommonModel> {}

export const CommonModel = types
    .model({
        theme: types.optional(types.string, 'default'),
    })
    .actions((self) => {
        function setTheme(theme: ThemeTypes) {
            self.theme = theme
        }
        return {
            setTheme,
        }
    })

type ThemeTypes = 'default' | 'cheerful' | 'business'
