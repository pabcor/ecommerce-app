import Heading from "@/components/heading/Heading";
import Button from "@/components/button/Button";

export function CheckoutOrderPreview() {
  return (
    <div className="hidden lg:block sticky top-0 left-0 w-2/5 h-screen py-8 px-4">
      <div className="flex flex-col gap-8">
        <Heading as="h5" size="xl">
          Resumen de tu compra
        </Heading>
        <table id="checkout" className="w-full">
          <tbody className="text-center max-h-[244px] overflow-y-auto">
            <tr>
              <td>
                <div className="w-[80px] h-[120px] bg-gray-200"></div>
              </td>
              <td>Lorem ipsum</td>
              <td>$ 3.000,00</td>
            </tr>
            <tr>
              <td>
                <div className="w-[80px] h-[120px] bg-gray-200"></div>
              </td>
              <td>Lorem ipsum</td>
              <td>$ 3.000,00</td>
            </tr>
            <tr>
              <td>
                <div className="w-[80px] h-[120px] bg-gray-200"></div>
              </td>
              <td>Lorem ipsum</td>
              <td>$ 3.000,00</td>
            </tr>
            <tr>
              <td>
                <div className="w-[80px] h-[120px] bg-gray-200"></div>
              </td>
              <td>Lorem ipsum</td>
              <td>$ 3.000,00</td>
            </tr>
            <tr>
              <td>
                <div className="w-[80px] h-[120px] bg-gray-200"></div>
              </td>
              <td>Lorem ipsum</td>
              <td>$ 3.000,00</td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            Orden: <div>$ 3.000,00</div>
          </div>
          <div className="flex justify-between">
            Costo de envío: <div>$ 564,00</div>
          </div>
          <div className="flex justify-between">
            Descuento (10,00 %): <div>$ 400,00</div>
          </div>
          <div className="flex justify-between">
            Total: <div>$ 3.564,00 </div>
          </div>
        </div>

        <Button>Finalizar compra</Button>
      </div>
    </div>
  );
}
