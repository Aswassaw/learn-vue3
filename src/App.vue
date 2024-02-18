<script setup>
import { ref, provide } from 'vue'

import ComputedProperties from './components/ComputedProperties.vue'
import HelloWorld from './components/HelloWorld.vue'
import MyEvent from './components/MyEvent.vue'
import MyReactiveComponent from './components/MyReactiveComponent.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ForComponent from './components/ForComponent.vue'
import VModel from './components/VModel.vue'
import PropsParent from './components/PropsParent.vue'
import ComponentEvent from './components/ComponentEvent.vue'
import SlotComponent from './components/SlotComponent.vue'
import NamedSlotComponent from './components/NamedSlotComponent.vue'
import SchoolComponent from './components/many/SchoolComponent.vue'
import LifeCycleComponent from './components/LifeCycleComponent.vue'
import WatchComponent from './components/WatchComponent.vue'
import WatchMultipleComponent from './components/WatchMultipleComponent.vue'
import BasicRef from './components/BasicRef.vue'
import ToggleComponent from "./components/friends/ToggleFriends.vue"
import CounterComponent from './components/CounterComponent.vue'
import YetAnotherCounterComponent from './components/YetAnotherCounterComponent.vue'
import CustomDirectives from './components/CustomDirectives.vue'
import MainComponent from './components/MainComponent.vue'

let count = ref(0)
const formHandler = (username, email, password) => {
  console.log(username, email, password)
}

provide('studentName', 'Andry Pebrianto')
provide('studentAge', 20)
provide('studentLocation', ['Trenggalek', 'Jawa Timur'])

const show = ref(true)
</script>

<template>
  <HelloWorld />
  <p class="text-gabut">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquam!</p>
  <h2 :class="myStyle.warnaBiru">Manusia Air</h2>
  <MyEvent />
  <MyReactiveComponent />
  <ComputedProperties />
  <ConditionalRendering />
  <ForComponent />
  <VModel />
  <PropsParent />

  <hr />
  <h1>Count: {{ count }}</h1>
  <ComponentEvent
    @userInfo="formHandler"
    @incrementCounter="count++"
    :justIncrement="() => count++"
  />

  <hr />
  <SlotComponent>
    <h1>Content 1</h1>
  </SlotComponent>
  <SlotComponent />
  <NamedSlotComponent>
    <template #two>
      <h1>Slot One</h1>
    </template>
    <template v-slot:one>
      <h1>Slot Two</h1>
    </template>
    <!-- <template #default>
      <h1>Default Bro</h1>
    </template> -->
  </NamedSlotComponent>

  <hr />
  <SchoolComponent />

  <hr />
  <LifeCycleComponent v-if="show" />
  <button @click="show = !show">Hide Me</button>

  <hr>
  <WatchComponent />
  <WatchMultipleComponent />

  <hr>
  <BasicRef />

  <hr>
  <ToggleComponent />

  <hr>
  <CounterComponent />
  <YetAnotherCounterComponent />

  <hr>
  <CustomDirectives />

  <hr>
  <MainComponent />
</template>

<style scoped>
.text-gabut {
  color: violet;
}
</style>

<style>
.text-gabut {
  color: blue;
}
</style>

<style module="myStyle">
.warnaBiru {
  background-color: blue;
}
</style>
