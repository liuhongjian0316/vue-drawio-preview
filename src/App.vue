<template>
  <div>
    <div ref="mxgraph" class="mxgraph" :data-mxgraph="config"></div>
  </div>
</template>
<script setup lang="ts">

import {getCurrentInstance, onMounted, ref} from "vue";
import axios from 'axios'

const {proxy} = getCurrentInstance() as any
const config = ref(null as any)
const url = "http://127.0.0.1:8888/drawio.test/test.drawio"

const initPreViewer = () => {
  axios.get(url).then((res:any) => {
    let xml = res.data
    xml = xml.replace(new RegExp("<!--.*?-->",'gs'), '');
    config.value=JSON.stringify({
      highlight: '#00afff',
      lightbox: false,
      nav: true,
      resize: true,
      toolbar: 'pages zoom layers search',
      xml: xml
    })
    proxy.$nextTick(()=>{
      if( (window as any).GraphViewer){
        (window as any).GraphViewer.createViewerForElement(proxy.$refs.mxgraph)
      }
    })
  })
}

onMounted(()=>{
  initPreViewer()
})

</script>


<style>
.mxgraph {
  height: 100vh;
  width: 100vw;
}
.geDiagramContainer {
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
