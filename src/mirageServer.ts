import { createServer } from "miragejs";

export default function makeServer(): void {
  createServer({
    routes() {
      this.get("/api/courses", () => ({
        courses: [
          {
            id: 1,
            imageSrc: "https://picsum.photos/id/20/250/250",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            id: 2,
            imageSrc: "https://picsum.photos/id/20/250/250",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            id: 3,
            imageSrc: "https://picsum.photos/id/20/250/250",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            id: 4,
            imageSrc: "https://picsum.photos/id/20/250/250",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            id: 5,
            imageSrc: "https://picsum.photos/id/20/250/250",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
          {
            id: 6,
            imageSrc: "https://picsum.photos/id/20/250/250",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          },
        ],
      }));
    },
  });
}
