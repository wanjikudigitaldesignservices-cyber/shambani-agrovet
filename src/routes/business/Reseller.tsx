import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";

export function Component() {
  return (
    <>
      <Helmet>
        <title>Reseller | {brand.name}</title>
      </Helmet>
      <div className="container-page py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-forest mb-4">Reseller</h1>
        <p className="text-ink/60">This module is under construction.</p>
      </div>
    </>
  );
}

Component.displayName = "Reseller";
