import { Project } from "@/types/gallery";

const NOCODB_URL = process.env.NOCODB_URL;
const NOCODB_API_TOKEN = process.env.NOCODB_API_TOKEN;

export async function GET() {
  try {
    const response = await fetch(
      `${NOCODB_URL}/api/v1/db/data/nc/p766obrqxldnfyr/mfrt5hdpntzqxnp`,
      {
        headers: {
          "xc-token": NOCODB_API_TOKEN!,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch gallery data");
    }

    const data = await response.json();
    console.log(`${NOCODB_URL}/${data.list[0].Thumbnail[0].signedPath}`);

    const projects: Project[] = data.list
      .filter((item: any) => item.Title && item.URL)
      .map((item: any) => ({
        id: item.Id.toString(),
        name: item.Title,
        url: item.URL || "#",
        thumbnail: item.Thumbnail?.[0]?.signedPath
          ? `${NOCODB_URL}/${item.Thumbnail[0].signedPath}`
          : "https://placehold.co/600x400?text=No+Image",
        creator: item.Creator || "Anonymous",
        description: item.Description || "",
      }));

    return Response.json({ projects });
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return Response.json(
      { error: "Failed to fetch gallery data" },
      { status: 500 }
    );
  }
}
