import store from "../store";

export default function guest({ next, router }) {
  if (store.getters.getUsername !== "") {
    return router.push({ path: "/" });
  }

  return next();
}
