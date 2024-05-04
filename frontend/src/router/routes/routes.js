import Home from "../../views/Home/Home.vue";
import Catalog from "../../views/Catalog/Catalog.vue";
import Sizes from "../../views/Sizes/Sizes.vue";
import Reviews from "../../views/Reviews/Reviews.vue";
import Blog from "../../views/Blog/Blog.vue";
import Partners from "../../views/Partners/Partners.vue";
import Auth from "../../views/Authentication/Auth/Auth.vue";
import Registration from "../../views/Authentication/Registration/Registration.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/catalog",
    name: "Catalog",
    component: Catalog,
  },
  {
    path: "/sizes",
    name: "Sizes",
    component: Sizes,
  },
  {
    path: "/reviews",
    name: "Reviews",
    component: Reviews,
  },
  {
    path: "/partners",
    name: "Partners",
    component: Partners,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/authentication",
    name: "Authentication",
    children: [
      {
        path: "sign-in",
        name: "Auth",
        component: Auth
      },
      {
        path: "registration",
        name: "Registration",
        component: Registration
      }
    ]
  }
];
