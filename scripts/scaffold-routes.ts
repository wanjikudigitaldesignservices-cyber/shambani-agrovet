import fs from 'node:fs';
import path from 'node:path';

const routes = [
  // Services
  "src/routes/services/VetServices.tsx",
  "src/routes/services/BookVet.tsx",
  "src/routes/services/AskAVet.tsx",
  "src/routes/services/VaccinationSchedules.tsx",
  "src/routes/services/Agronomy.tsx",
  "src/routes/services/SoilTesting.tsx",
  "src/routes/services/CropCalendar.tsx",

  // Tools
  "src/routes/tools/Tools.tsx",
  "src/routes/tools/FertilizerCalculator.tsx",
  "src/routes/tools/DosageCalculator.tsx",
  "src/routes/tools/FeedBudgetCalculator.tsx",

  // Knowledge
  "src/routes/knowledge/Blog.tsx",
  "src/routes/knowledge/BlogPost.tsx",
  "src/routes/knowledge/BlogCategory.tsx",
  "src/routes/knowledge/BlogTag.tsx",
  "src/routes/knowledge/DiseaseLibrary.tsx",
  "src/routes/knowledge/DiseaseEntry.tsx",
  "src/routes/knowledge/Safety.tsx",
  "src/routes/knowledge/FAQs.tsx",

  // Business
  "src/routes/business/BulkOrders.tsx",
  "src/routes/business/Reseller.tsx",
  "src/routes/business/Delivery.tsx",
  "src/routes/business/Branches.tsx",
  "src/routes/business/About.tsx",
  "src/routes/business/Compliance.tsx",
  "src/routes/business/Contact.tsx",
  "src/routes/business/Reviews.tsx",

  // Legal
  "src/routes/legal/Privacy.tsx",
  "src/routes/legal/Terms.tsx",
  "src/routes/legal/Returns.tsx",
  "src/routes/legal/Cookies.tsx",
  "src/routes/legal/Disclaimer.tsx",
  "src/routes/legal/Sitemap.tsx",

  // Auth
  "src/routes/auth/Login.tsx",
  "src/routes/auth/Register.tsx",
  "src/routes/auth/ForgotPassword.tsx",
  "src/routes/auth/ResetPassword.tsx",
  "src/routes/auth/VerifyEmail.tsx",

  // Admin
  "src/routes/admin/AdminLayout.tsx"
];

for (const route of routes) {
  const fullPath = path.join(process.cwd(), route);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const componentName = path.basename(route, '.tsx');
  
  const content = `import { Helmet } from "react-helmet-async";
import { brand } from "../../config/brand.config";

export function Component() {
  return (
    <>
      <Helmet>
        <title>${componentName} | {brand.name}</title>
      </Helmet>
      <div className="container-page py-16 text-center">
        <h1 className="font-heading text-3xl font-bold text-forest mb-4">${componentName}</h1>
        <p className="text-ink/60">This module is under construction.</p>
      </div>
    </>
  );
}

Component.displayName = "${componentName}";
`;

  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
  }
}

console.log("Scaffolded placeholder routes.");
