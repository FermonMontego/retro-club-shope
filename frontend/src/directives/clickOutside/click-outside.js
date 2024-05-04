export default {
  created(element, binding, v_node) {
    element.outsideEvent = event => {
      if (!(element === event.target || element.contains(event.target))) {
        binding.value.call();
      }
    };

    document.body.addEventListener("click", element.outsideEvent);
    document.body.addEventListener("touchstart", element.outsideEvent);
  },
  unmounted(element) {
    document.body.addEventListener("click", element.outsideEvent);
    document.body.addEventListener("touchstart", element.outsideEvent);
  }
};
