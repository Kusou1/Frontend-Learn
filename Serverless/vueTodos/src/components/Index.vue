<template>
    <div>
        <el-card shadow="always">
            <el-input v-model="addData.title" placeholder="请输入内容">
                <el-button slot="append" @click="addTodo">添加任务</el-button>
            </el-input>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addData: {
                title: "",
            },
        };
    },
    methods: {
        async addTodo() {
            try {
                var data = this.addData;
                const res = await this.$cloudbase.callFunction({
                    name: "addtodo",
                    data:{
                        title:data.title
                    }
                });
                console.log(res);
            } catch (e) {
                console.error(e);
            }
        },
        async showTodo(){
            try {
                const res = await this.$cloudbase.callFunction({
                    name: "gettodo"
                });
                console.log(res);
            } catch (e) {
                console.error(e);
            }
        }
    },
    async mounted() {
        let auth = this.$cloudbase.auth();
        await auth.anonymousAuthProvider().signIn();
        await this.showTodo()
    },
};
</script>

<style>
</style>