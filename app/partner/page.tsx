import { PartnerWith } from "@/components/PartnerWith";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/partner";
const title = "Partner With Us";
const description =
  "Why NGOs, corporates, government agencies and academic institutions partner with Edfrica to scale entrepreneurship and STEAM programmes in Africa.";

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
