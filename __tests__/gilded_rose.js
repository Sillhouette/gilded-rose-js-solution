const { Item, Shop, Sulfuras, AgedBrie, NormalItem, BackstagePass, ConjuredItem } = require('../src/gilded_rose')

describe("Gilded Rose", () => {

  describe("Item", () => {
    it("should have a name", () => {
      const gildedRose = new Shop([ new Item("foo", 0, 0) ]);

      expect(gildedRose.items[0].name).toEqual("foo");
    });

    it("should have a sellIn", () => {
      const gildedRose = new Shop([ new Item("foo", 10, 0) ]);

      expect(gildedRose.items[0].sellIn).toEqual(10);
    });

    it("should have a quality", () => {
      const gildedRose = new Shop([ new Item("foo", 10, 15) ]);

      expect(gildedRose.items[0].quality).toEqual(15);
    });
  })

  describe("Sulfuras, Hand of Ragnaros", () => {
    describe("#updateQuality", () => {
      const sellIn = 10
      const quality = 15

      it("should not have it's sellIn date decreased", () => {
        const gildedRose = new Shop([ new Sulfuras(sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(sellIn);
      });

      it("should not have it's quality decreased", () => {
        const gildedRose = new Shop([ new Sulfuras(sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(quality);
      });
    })
  })

  describe("Aged Brie", () => {
    describe("#updateQuality", () => {
      const sellIn = 7
      const quality = 5

      it("should have it's sellIn date decreased", () => {
        const gildedRose = new Shop([ new AgedBrie(sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(sellIn - 1);
      });

      it("should have it's quality increased", () => {
        const gildedRose = new Shop([ new AgedBrie(sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(quality + 1);
      });

      it("should not have it's quality increased past 50", () => {
        const highQuality = 50
        const gildedRose = new Shop([ new AgedBrie(sellIn, highQuality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(highQuality);
      });
    })
  })

  describe("Conjured Items", () => {
    describe("#updateQuality", () => {
      const name = "Laptop"
      const sellIn = 7
      const quality = 5

      it("should have it's sellIn date decreased", () => {
        const gildedRose = new Shop([ new ConjuredItem(name, sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(sellIn - 1);
      });

      it("should have it's quality decreased by 2", () => {
        const gildedRose = new Shop([ new ConjuredItem(name, sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(quality - 2);
      });

      it("should not have it's quality decreased below 0", () => {
        const lowQuality = 1
        const gildedRose = new Shop([ new ConjuredItem(name, sellIn, lowQuality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(0);
      });
    })
  })

  describe("Normal Items", () => {
    describe("#updateQuality", () => {
      const name = "A Very Normal Item"
      const sellIn = 7
      const quality = 11

      it("should have it's sellIn date decreased", () => {
        const gildedRose = new Shop([ new NormalItem(name, sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].sellIn).toEqual(sellIn - 1);
      });

      it("should have it's quality decreased", () => {
        const gildedRose = new Shop([ new NormalItem(name, sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(quality - 1);
      });

      it("should not have it's quality decrease below 0", () => {
        const lowQuality = 0
        const gildedRose = new Shop([ new NormalItem(name, sellIn, lowQuality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(lowQuality);
      });

      it("should have its quality decreased by 2 if sellIn date is less than 0", () => {
        const sellIn = -1
        const gildedRose = new Shop([ new NormalItem(name, sellIn, quality) ]);
        items = gildedRose.updateQuality()

        expect(items[0].quality).toEqual(quality - 2);
      });
    })
  })

  describe("Shop", () => {

    describe("#updateQuality", () => {


      describe("Backstage Passes", () => {
        const sellIn = 2
        const quality = 25

        it("should have it's sellIn date decreased", () => {
          const gildedRose = new Shop([ new BackstagePass(sellIn, quality) ]);
          items = gildedRose.updateQuality()

          expect(items[0].sellIn).toEqual(sellIn - 1);
        });

        it("should have it's quality increased by 1 if sellIn is greater than 10", () => {
          const sellIn = 20
          const gildedRose = new Shop([ new BackstagePass(sellIn, quality) ]);
          items = gildedRose.updateQuality()

          expect(items[0].quality).toEqual(quality + 1);
        });

        it("should have it's quality incrased by 2 if its sellIn date is between 6 and 10", () => {
          const sellIn = 6
          const gildedRose = new Shop([ new BackstagePass(sellIn, quality) ]);
          items = gildedRose.updateQuality()

          expect(items[0].quality).toEqual(quality + 2);
        });

        it("should have it's quality incrased by 3 if its sellIn date is between 1 and 5", () => {
          const sellIn = 4
          const gildedRose = new Shop([ new BackstagePass(sellIn, quality) ]);
          items = gildedRose.updateQuality()

          expect(items[0].quality).toEqual(quality + 3);
        });

        it("should have it's quality drop to 0 if sellIn is less than or equal to 0", () => {
          const sellIn = 0
          const gildedRose = new Shop([ new BackstagePass(sellIn, quality) ]);
          items = gildedRose.updateQuality()

          expect(items[0].quality).toEqual(0);
        });
      })
    })
  })
});
