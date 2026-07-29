import { Leadership } from "@/components/Leadership";
import { JsonLd } from "@/components/JsonLd";
import {
  breadcrumbNode,
  graph,
  leadershipListNode,
  webPageNode,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const path = "/team";
const title = "Leadership & Team";
const description =
  "Meet the leadership and management team behind Edfrica's five-pillar ecosystem for youth entrepreneurship and innovation across Africa.";

export const metadata = buildMetadata({
  title,
  description,
  path,
  socialTitle: "The team behind the ecosystem",
});

const crumbs = [{ name: "Leadership & Team", path }];

export default function TeamPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageNode({
            path,
            name: title,
            description,
            type: "AboutPage",
            crumbs,
          }),
          breadcrumbNode(crumbs),
          leadershipListNode(),
        ])}
      />
      <Leadership />
    </>
  );
}
