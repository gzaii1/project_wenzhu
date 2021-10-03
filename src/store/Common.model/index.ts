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
        listHeight: types.optional(types.number, 0),
    })
    .actions((self) => {
        function setTheme(theme: ThemeTypes) {
            self.theme = theme
        }
        function setListHeight(height: number) {
            self.listHeight = height;
        }
        return {
            setTheme,
            setListHeight,
        }
    })

type ThemeTypes = 'default' | 'cheerful' | 'business'
