<template>
    <div id="app">
        <Layout class="lay">
            <Header>
                <div class="logo">
                    Chat !
                </div>
            </Header>
            <Content>
                <div class="chat-area" id="scroll">
                    <transition-group name="list" tag="p">
                        <div v-for="(chat, index) in $store.state.chatHistory" v-bind:class="chat.className" :key="index">
                            <Avatar size="large" class="avatar" :src="chat.img">{{chat.type}}</Avatar>
                            <div class="chat-sequence">{{chat.seg}}</div>
                        </div>
                    </transition-group>
                </div>
            </Content>
            <Footer>
                <div class="footbar">
                    <div v-if="$store.state.chatStyle" class="text-area">
                        <div class="more"><Icon type="ios-mic" @click="$store.commit('toggle')" /></div>
                        <div class="input">
                            <Input v-model="$store.state.sequence" placeholder="Say something..."
                                   style="width: 200px" size="large" @keyup.13.native="$store.commit('writeSome')"/>
                        </div>
                    </div>
                    <div v-else class="audio-area">
                        <div class="more"><Icon type="logo-yahoo" @click="$store.commit('toggle')" /></div>
                        <div class="input">
                            <Button size="large" style="width: 200px;">长按发表你的感言</Button>
                        </div>
                    </div>
                    <div class="emoji">
                        <Tooltip content="暂未想好做什么" theme="light" :transfer=true>
                            <Icon type="ios-ionitron-outline" />
                        </Tooltip>
                    </div>
                    <div class="fly" @click="$store.commit('writeSome')">
                        <Icon type="md-paper-plane" />
                    </div>
                </div>
            </Footer>
        </Layout>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }

    html, body, .lay, .footbar, .chat-area {
        height: 100%;
    }

    header, footer {
        height: 10%;
    }

    header {
        background: #fff;
        box-shadow: 7px 7px 7px #eee;
    }

    footer {
        display: flex;
        background: #fff;
        box-shadow: -7px -7px 7px #eee;
        justify-content: center;
    }

    content {
        height: 80%;
    }

    /*diy css*/
    .logo {
        font-size: 30px;
        height: 30px;
        line-height: 30px;
        display: block;
        top: 50%;
        position: relative;
        transform: translateY(-50%);
        letter-spacing: 5px;
        text-shadow: 6px 3px 6px #e8d7d7;
        filter: contrast(-120%);
    }
    .avatar {
        box-shadow: 7px 7px 5px #eee;
        display: block;
        border-radius: 50%;
    }

    .footbar {
        display: flex;
        padding: 10px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
    }

    .more {
        width: 35px;
        height: inherit;
        cursor: pointer;
        text-shadow: 7px 7px 7px #eee;
        font-size: 35px;
        margin-right: 20px;
        margin-left: 10px;
        margin-bottom: 7px;
    }
    .text-area, .audio-area {
        display: flex;
    }
    .input {
        width: 200px;
        display: flex;
        align-items: center;
    }
    .emoji i, .fly i {
        width: 35px;
        height: inherit;
        cursor: pointer;
        text-shadow: 7px 7px 7px #eee;
        font-size: 35px;
        margin-right: 10px;
        display: block;
    }
    .emoji i {
        margin-left: 20px;
    }
    .emoji:hover, .fly:hover, .more:hover {
        color: #01b6ff;
    }
    .chat-card-1, .chat-card-2 {
        display: flex;
        align-items: center;
        padding: 15px;
    }
    .chat-card-1 {
        flex-direction: row;
    }
    .chat-card-1 {
        flex-direction: row-reverse;
    }
    .chat-card-1 div, .chat-card-2 div {
        justify-content: flex-start;
        margin: 0 15px;
        background: #fff;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 12px;
        border-radius: 8px;
        box-shadow: 4px 4px 4px #eee;
    }
    .chat-area {
        overflow: scroll;
    }
    /* animation */
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to
        /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(-30px);
    }
</style>

<script>
export default {
  updated () {
    this.$nextTick(() => {
      let div = document.getElementById('scroll')
      div.scrollTop = div.scrollHeight
    })
  }
}
</script>
