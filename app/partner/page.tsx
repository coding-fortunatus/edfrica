import { PartnerWith } from "@/components/PartnerWith";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/partner";
const title = "Partner With Us";
const description =
  "Why NGOs, donors, corporates, government agencies, and academic institutions partner with Edfrica to scale youth entrepreneurship and STEAM programs across Africa.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  socialTitle: "Partner with Edfrica",
});

const crumbs = [{ name: "Partner With Us", path }];

export default function PartnerPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({ path, name: title, description, crumbs }),
          breadcrumbNode(crumbs),
        ])}
      />
      <PartnerWith />
    </>
  );
}
