const { Ship, Port, Itinerary } = require("../src/cruise-ships");

describe("Itineray", () => {
  const newTerra = new Port("New Terra");
  const Ilus = new Port("Ilus");
  const itinerary = new Itinerary(newTerra, Ilus);
  it("instantiates an itinerary", () => {
    expect(itinerary).toBeInstanceOf(Object);
    expect(itinerary).toHaveProperty("ports");
  });

  it("has an array of two ports", () => {
    expect(itinerary.ports).toEqual([newTerra, Ilus]);
    console.log(itinerary.ports);
  });
});
