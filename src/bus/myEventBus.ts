import Vue from 'vue';

export enum MyEventBusEvents {
    MyTestEvent = 'my_test_event', // why my_test_event?
    AddJob = "add_a_job",
}

export const myEventBus = new Vue(); // fixme: mcaffee. What is this? new Vue is totally correct.