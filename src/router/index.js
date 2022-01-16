import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home";
import Start from "../views/Start";
import Questionnaire from "../views/Questionnaire";
import PDFDownload from "../views/PDFDownload";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Start',
    name: 'Start',
    component: Start
  },
  {
    path: '/Questionnaire',
    name: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/PDFDownload',
    name: 'PDFDownload',
    component: PDFDownload
  }


]

const router = new VueRouter({
  routes
})

export default router
