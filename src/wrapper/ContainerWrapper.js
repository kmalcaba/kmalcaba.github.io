function ContainerWrapper(Component, idName, classNames = "") {
  return function HOC() {
    return (
      <section id={idName} className={`${classNames} container`}>
        <Component />
      </section>
    );
  };
}
export default ContainerWrapper;
