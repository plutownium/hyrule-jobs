// import { Vue } from 'vue';
import Vue from 'vue';
// import { Vue } from 'vue-class-component'

export enum MyEventBusEvents {
    MyTestEvent = 'my_test_event', 
    AddJob = "add_a_job",
}

export const myEventBus = Vue.createApp({}); // fixme: What is this? new Vue is totally correct.