import "@/store/test.css";

const arrow = (): string => "dd";
console.log(arrow());
console.log(process.env.NODE_ENV);

interface IceAmericano {
  price: number;
}

const aa = (name: number, obj: IceAmericano): void => {
  console.log({ name, price: obj.price });
  console.info("info");
};
/**
 * @licence dd
 */
const americano: IceAmericano = { price: 3000 };

aa(1, americano);

/**
 * !지워지냐
 */
const testHtml = `<div class="testClass"></div>`;

const abc = () => `${testHtml}span`;

abc();
export default arrow;
