<template>
  <div class="full-width shadow-3 rounded-borders" style="padding: 10px;margin: 10px">
    <div id="PayChart"></div>
  </div>
</template>

<script>
  import { Line } from '@antv/g2plot';
  export default {
    name: "PayChart",
    props:{
      dataList:{
        type:Array,
        default:[]
      }
    },
    data(){
      return{

      }
    },
    methods:{
      initChart(){
        let data = this.dataList
        let i18n = this.$i18n
        this.chart = new Line('PayChart',{
          title: {
            text: i18n.t("home.payChart"),
            visible:true
          },
          data,
          xField: 'date',
          yField: 'number',
        })
        this.chart.render();
      }
    },
    mounted() {
      this.initChart();
    },
    watch:{
      dataList(value){
        this.chart.changeData(value)
      },
      "$i18n.locale"(){
        let i18n = this.$i18n
        let data = this.dataList
        this.chart.updateConfig({
          title: {
            text: i18n.t("home.payChart"),
            visible:true
          },
          data,
          xField: 'date',
          yField: 'number',
        })
        this.chart.render()
      }
    }
  }
</script>

<style scoped>

</style>
