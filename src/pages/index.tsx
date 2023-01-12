import Breadcrumb from "@/layouts/breadcrumb/Breadcrumb";
import Product from "@/features/product-detail/Product";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prueba</title>
      </Head>

      <Breadcrumb
        routes={[
          { name: "Inicio", href: "/" },
          { name: "Catálogo", href: "/catalog" },
          { name: "Prueba", href: "/catalog/prueba" },
        ]}
      />
      <Product
        title="Prueba"
        price={3000}
        discount={10}
        description="Integer ut euismod orci, vitae laoreet urna. Donec laoreet pretium quam, dignissim congue sapien congue in. Cras congue ante quis sagittis volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ultricies sed erat sed malesuada. Nam ac elementum leo. In condimentum tortor vel felis interdum varius. Donec tempus enim eget erat rutrum egestas. Morbi malesuada finibus ante, ac suscipit est accumsan a. Vivamus molestie sollicitudin enim ac efficitur. Sed ac est auctor, imperdiet mauris at, fermentum lorem. Sed scelerisque varius ipsum, quis tincidunt neque elementum a. Ut bibendum eros a lorem pellentesque eleifend. In pharetra id ex ut euismod. Praesent venenatis metus in tortor pulvinar faucibus. Quisque ex metus, dignissim at semper at, accumsan a tellus. "
        returnsPolicy="Morbi suscipit imperdiet justo, eu pretium eros congue ut. Nulla volutpat fermentum sapien, ut iaculis ipsum accumsan at. Suspendisse rhoncus, erat sed tincidunt pretium, lectus lacus semper nulla, non semper magna quam non lorem. Nullam dictum nunc ac lacus consequat, sed maximus sem feugiat. Nullam eu mauris a turpis egestas placerat hendrerit eget metus. Morbi sit amet commodo leo. Aliquam sodales varius diam, et pretium ipsum aliquet ac. Aliquam tincidunt commodo lorem, sit amet euismod eros dictum non. Vivamus aliquet ac magna quis gravida. Nunc luctus id sem at viverra. Nam urna quam, pharetra ac lobortis vitae, vestibulum vel risus. Phasellus sit amet mi dignissim magna auctor ullamcorper nec a est. Vestibulum fermentum interdum viverra. Cras rutrum consectetur accumsan."
        images={[
          {
            id: 1,
            desktop: {
              alt: "Prueba",
              src: "/product-1.png",
              width: 400,
              height: 600,
            },
            mobile: {
              alt: "Prueba",
              src: "/product-1m.png",
              width: 300,
              height: 400,
            },
          },
          {
            id: 2,
            desktop: {
              alt: "Prueba",
              src: "/product-2.png",
              width: 400,
              height: 600,
            },
            mobile: {
              alt: "Prueba",
              src: "/product-2m.png",
              width: 300,
              height: 400,
            },
          },
          {
            id: 3,
            desktop: {
              alt: "Prueba",
              src: "/product-3.png",
              width: 400,
              height: 600,
            },
            mobile: {
              alt: "Prueba",
              src: "/product-3m.png",
              width: 300,
              height: 400,
            },
          },
          {
            id: 4,
            desktop: {
              alt: "Prueba",
              src: "/product-4.png",
              width: 400,
              height: 600,
            },
            mobile: {
              alt: "Prueba",
              src: "/product-4m.png",
              width: 300,
              height: 400,
            },
          },
        ]}
        attributeValues={[
          {
            name: "Marca",
            value: "Samsung",
          },
          {
            name: "Talle",
            selectable: {
              label: "size",
              items: [
                {
                  id: 1,
                  value: "XS",
                },
                {
                  id: 2,
                  value: "S",
                },
                {
                  id: 3,
                  value: "M",
                },
                {
                  id: 4,
                  value: "L",
                },
                {
                  id: 5,
                  value: "XL",
                },
                {
                  id: 6,
                  value: "XXL",
                },
              ],
            },
          },
          {
            name: "Color",
            selectable: {
              label: "color",
              required: true,
              items: [
                {
                  id: 1,
                  value: "Rojo",
                },
                {
                  id: 2,
                  value: "Amarillo",
                },
                {
                  id: 3,
                  value: "Ámbar",
                },
                {
                  id: 4,
                  value: "Naranja",
                },
              ],
            },
          },
          {
            name: "Tabla de talles",
            chart: {
              columns: [
                "Hombros",
                "Contorno",
                "Cadera",
                "Tiro delantero",
                "Tiro trasero",
                "Largo de piernas",
              ],
              rows: [
                { key: "XS", values: ["54", "53", "53", "31", "36", "101"] },
                { key: "S", values: ["45", "54", "54", "31", "37", "102"] },
                { key: "M", values: ["46", "56", "56", "32", "38", "103"] },
                { key: "L", values: ["47", "57", "57", "32,5", "39", "104"] },
                { key: "XL", values: ["48", "58", "58", "33", "40", "105"] },
                {
                  key: "XXL",
                  values: ["49", "60", "60", "33,5", "41", "106"],
                },
              ],
            },
          },
        ]}
      />
    </>
  );
}
