<template>
    <div class="tabbar">
        <tabbar>
            <tabbar-item>
                <template slot="label">{{$t('titles.home')}}</template>
            </tabbar-item>
            <tabbar-item>
                <template slot="label">{{$t('titles.mine')}}</template>
            </tabbar-item>
        </tabbar>
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
    name: 'HelloWorld',
    components: { Tabbar, TabbarItem },
    props: {
        msg: String
    }
}
</script>
