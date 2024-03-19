import HeroCanva from "@/components/heroCanva";
import FeaturesCanva from "@/components/featuresCanva";
import GarantiaCanva from "@/components/garantiaCanva";
import PrecoCanva from "@/components/precoCanva";
import FaqCanva from "@/components/faqCanva";
import Indicacao from "@/components/indicacao";

export default function PackCanva() {
  return (
    <>
      <div>
        <HeroCanva />
        <FeaturesCanva />
        <GarantiaCanva />
        <PrecoCanva />
        <Indicacao />
        <FaqCanva />
      </div>
    </>
  );
}
