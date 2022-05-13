import React, { PropsWithChildren, ReactElement } from "react";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import data from "../../utils/data";

declare module "react" {
  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  }
}

const BurgerIngredients = () => {
  const [currentTab, setCurrentTab] = React.useState("bun");
  return (
    <section className="mt-10 pl-5" style={{ width: "50%" }}>
      <p className="text text_type_main-large">Соберите бургер</p>

      {/*TODO Отдельный компонент*/}
      <div className="mt-5" style={{ display: "flex" }}>
        <Tab active={currentTab === "bun"} value="bun" onClick={setCurrentTab}>
          Булки
        </Tab>
        <Tab
          active={currentTab === "sauce"}
          value="sauce"
          onClick={setCurrentTab}
        >
          Соусы
        </Tab>
        <Tab
          active={currentTab === "filling"}
          value="filling"
          onClick={setCurrentTab}
        >
          Начинки
        </Tab>
      </div>

      {/*TODO Отдельный компонент*/}
      <section className="mt-10">
        <p className="text text_type_main-medium mb-6">Булки</p>
        <section className="pl-4" style={{ display: "flex", columnGap: 24 }}>
          {data
            .filter(({ type }) => type === "bun")
            .map(({ image, name, price, type }, idx) => (
              <div
                key={idx.toString()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "50%",
                }}
              >
                <img className="pl-4 pr-4 mb-1" src={image} alt={name} />
                <div style={{ display: "flex", columnGap: 9 }}>
                  <p className="text text_type_digits-default mb-1">{price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className="text text_type_main-default">{name}</p>
              </div>
            ))}
        </section>
      </section>
      {/*TODO Отдельный компонент*/}
      <section className="mt-10">
        <p className="text text_type_main-medium">Соусы</p>
        {data
          .filter(({ type }) => type === "sauce")
          .map(({ image, name, price, type }, idx) => (
            <section key={idx.toString()}>
              <img src={image} alt={name} />
              <p className="text text_type_digits-default">{price}</p>
              <p className="text text_type_main-default">{name}</p>
            </section>
          ))}
      </section>
      {/*TODO Отдельный компонент*/}
      <section className="mt-10">
        <p className="text text_type_main-medium">Начинки</p>
        {data
          .filter(({ type }) => type === "main")
          .map(({ image, name, price, type }, idx) => (
            <section key={idx.toString()}>
              <img src={image} alt={name} />
              <p className="text text_type_digits-default">{price}</p>
              <p className="text text_type_main-default">{name}</p>
            </section>
          ))}
      </section>
    </section>
  );
};

export default BurgerIngredients;
