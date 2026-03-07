import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Button from "@/views/Button.vue";
import Typography from "@/views/Typography.vue";
import Checkbox from "@/views/Checkbox.vue";
import Radiobutton from "@/views/Radiobutton.vue";
import Progress from "@/views/Progress.vue";
import Input from "@/views/Input.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index,
    },
    {
      path: "/button",
      name: "Button",
      component: Button,
    },
    {
      path: "/typography",
      name: "typography",
      component: Typography,
    },
    {
      path: "/checkbox",
      name: "checkbox",
      component: Checkbox,
    },
    {
      path: "/radiobutton",
      name: "radiobutton",
      component: Radiobutton,
    },
    {
      path: "/progress",
      name: "progress",
      component: Progress,
    },
    {
      path: "/input",
      name: "input",
      component: Input,
    },
  ],
});

export default router;
