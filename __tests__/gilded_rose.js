const { Item, Shop, Sulfuras, AgedBrie, NormalItem, BackstagePass, ConjuredItem } = require('../src/gilded_rose')

describe("Gilded Rose", () => {

  describe("Item", () => {
    const sellIn = 10
    const quality = 15
    const genericItem = new Item("foo", sellIn, quality);

    describe("#constructor", () => {
      it("should have a name", () => {
        expect(genericItem.name).toEqual("foo");
      });

      it("should have a sellIn", () => {
        expect(genericItem.sellIn).toEqual(sellIn);
      });

      it("should have a quality", () => {
        expect(genericItem.quality).toEqual(quality);
      });
    })

    describe("Normal Items", () => {
      describe("#constructor", () => {
        const name = "A Very Normal Item"
        const sellIn = 7
        const quality = 11
        const normalItem = new NormalItem(name, sellIn, quality);

        it("should be an instance of Item", () => {
          expect(normalItem instanceof Item).toEqual(true);
        });

        it("should be an instance of ConjuredItem", () => {
          expect(normalItem instanceof NormalItem).toEqual(true);
        });

        it("should have a name", () => {
          expect(normalItem.name).toEqual("A Very Normal Item");
        });

        it("should have a sellIn", () => {
          expect(normalItem.sellIn).toEqual(sellIn);
        });

        it("should have a quality", () => {
          expect(normalItem.quality).toEqual(quality);
        });
      })

      describe("#updateQuality", () => {
        const name = "A Very Normal Item"
        const sellIn = 7
        const quality = 11
        const normalItem = new NormalItem(name, sellIn, quality);
        normalItem.updateQuality()

        it("should have it's sellIn date decreased", () => {
          expect(normalItem.sellIn).toEqual(sellIn - 1);
        });

        it("should have it's quality decreased", () => {
          expect(normalItem.quality).toEqual(quality - 1);
        });

        it("should not have it's quality decrease below 0", () => {
          const lowQuality = 0
          const lowQualityNormalItem = new NormalItem(name, sellIn, lowQuality);
          lowQualityNormalItem.updateQuality()

          expect(lowQualityNormalItem.quality).toEqual(lowQuality);
        });

        it("should have its quality decreased by 2 if sellIn date is less than 0", () => {
          const lowSellIn = -1
          const lowSellInNormalItem = new NormalItem(name, lowSellIn, quality);
          lowSellInNormalItem.updateQuality()

          expect(lowSellInNormalItem.quality).toEqual(quality - 2);
        });
      })
    })

    describe("Conjured Items", () => {
      describe("#constructor", () => {
        const name = "Laptop"
        const sellIn = 7
        const quality = 5
        const laptop = new ConjuredItem(name, sellIn, quality);

        it("should be an instance of Item", () => {
          expect(laptop instanceof Item).toEqual(true);
        });

        it("should be an instance of ConjuredItem", () => {
          expect(laptop instanceof ConjuredItem).toEqual(true);
        });

        it("should have a name", () => {
          expect(laptop.name).toEqual("Laptop");
        });

        it("should have a sellIn", () => {
          expect(laptop.sellIn).toEqual(sellIn);
        });

        it("should have a quality", () => {
          expect(laptop.quality).toEqual(quality);
        });
      })

      describe("#updateQuality", () => {
        const name = "Laptop"
        const sellIn = 7
        const quality = 5
        const laptop = new ConjuredItem(name, sellIn, quality);
        laptop.updateQuality()

        it("should have it's sellIn date decreased", () => {
          expect(laptop.sellIn).toEqual(sellIn - 1);
        });

        it("should have it's quality decreased by 2", () => {
          expect(laptop.quality).toEqual(quality - 2);
        });

        it("should not have it's quality decreased below 0", () => {
          const lowQuality = 1
          const lowQualityLaptop = new ConjuredItem(name, sellIn, lowQuality);
          lowQualityLaptop.updateQuality()

          expect(lowQualityLaptop.quality).toEqual(0);
        });
      })
    })



    describe("Backstage Passes", () => {
      describe("#constructor", () => {
        const sellIn = 2
        const quality = 25
        const backstagePass = new BackstagePass(sellIn, quality);

        it("should be an instance of Item", () => {
          expect(backstagePass instanceof Item).toEqual(true);
        });

        it("should be an instance of BackstagePass", () => {
          expect(backstagePass instanceof BackstagePass).toEqual(true);
        });

        it("should have a name", () => {
          expect(backstagePass.name).toEqual("Backstage passes to a TAFKAL80ETC concert");
        });

        it("should have a sellIn", () => {
          expect(backstagePass.sellIn).toEqual(sellIn);
        });

        it("should have a quality", () => {
          expect(backstagePass.quality).toEqual(quality);
        });
      })

      describe("#updateQuality", () => {
        const sellIn = 2
        const quality = 25
        const backstagePass = new BackstagePass(sellIn, quality);
        backstagePass.updateQuality()

        it("should have it's sellIn date decreased", () => {
          expect(backstagePass.sellIn).toEqual(sellIn - 1);
        });

        it("should have it's quality increased by 1 if sellIn is greater than 10", () => {
          const highSellIn = 20
          const backstagePass = new BackstagePass(highSellIn, quality);
          backstagePass.updateQuality()

          expect(backstagePass.quality).toEqual(quality + 1);
        });

        it("should have it's quality increased by 2 if its sellIn date is between 6 and 10", () => {
          const midSellIn = 6
          const backstagePass = new BackstagePass(midSellIn, quality);
          backstagePass.updateQuality()

          expect(backstagePass.quality).toEqual(quality + 2);
        });

        it("should have it's quality increased by 3 if its sellIn date is between 1 and 5", () => {
          const lowSellIn = 4
          const backstagePass = new BackstagePass(lowSellIn, quality);
          backstagePass.updateQuality()

          expect(backstagePass.quality).toEqual(quality + 3);
        });

        it("should have it's quality drop to 0 if sellIn is less than or equal to 0", () => {
          const zeroSellIn = 0
          const backstagePass = new BackstagePass(zeroSellIn, quality);
          backstagePass.updateQuality()

          expect(backstagePass.quality).toEqual(0);
        });
      })
    })

    describe("Aged Brie", () => {
      describe("#constructor", () => {
        const sellIn = 7
        const quality = 5
        const agedBrie = new AgedBrie(sellIn, quality);

        it("should be an instance of Item", () => {
          expect(agedBrie instanceof Item).toEqual(true);
        });

        it("should be an instance of Aged Brie", () => {
          expect(agedBrie instanceof AgedBrie).toEqual(true);
        });

        it("should have a name", () => {
          expect(agedBrie.name).toEqual("Aged Brie");
        });

        it("should have a sellIn", () => {
          expect(agedBrie.sellIn).toEqual(sellIn);
        });

        it("should have a quality", () => {
          expect(agedBrie.quality).toEqual(quality);
        });
      })

      describe("#updateQuality", () => {
        const sellIn = 7
        const quality = 5
        const agedBrie = new AgedBrie(sellIn, quality);
        agedBrie.updateQuality()

        it("should have it's sellIn date decreased", () => {
          expect(agedBrie.sellIn).toEqual(sellIn - 1);
        });

        it("should have it's quality increased", () => {
          expect(agedBrie.quality).toEqual(quality + 1);
        });

        it("should not have it's quality increased past 50", () => {
          const highQuality = 50
          const highQualityBrie = new AgedBrie(sellIn, highQuality);

          highQualityBrie.updateQuality()

          expect(highQualityBrie.quality).toEqual(highQuality);
        });
      })
    })

    describe("Sulfuras, Hand of Ragnaros", () => {
      describe("#constructor", () => {
        const sellIn = 10
        const quality = 15
        const sulfuras = new Sulfuras(sellIn, quality);

        it("should be an instance of Item", () => {
          expect(sulfuras instanceof Item).toEqual(true);
        });

        it("should be an instance of Sulfuras", () => {
          expect(sulfuras instanceof Sulfuras).toEqual(true);
        });

        it("should have a name", () => {
          expect(sulfuras.name).toEqual("Sulfuras, Hand of Ragnaros");
        });

        it("should have a sellIn", () => {
          expect(sulfuras.sellIn).toEqual(sellIn);
        });

        it("should have a quality", () => {
          expect(sulfuras.quality).toEqual(quality);
        });
      })

      describe("#updateQuality", () => {
        const sellIn = 10
        const quality = 15
        const sulfuras = new Sulfuras(sellIn, quality);

        it("should not have it's sellIn date altered", () => {
          expect(sulfuras.sellIn).toEqual(sellIn);
        });

        it("should not have it's quality altered", () => {
          expect(sulfuras.quality).toEqual(quality);
        });
      })
    })
  })

  describe("Shop", () => {
    const sulfuras = new Sulfuras(10, 15);
    const agedBrie = new AgedBrie(7, 5);
    const monitor = new NormalItem(8, 11);
    const conjuredKeyboard = new ConjuredItem(4, 5);
    const backstagePass = new BackstagePass(15, 7);
    const items = [sulfuras, agedBrie, monitor, conjuredKeyboard, backstagePass]
    const shop = new Shop(items);

    describe("#constructor", () => {
      it("should have an items array", () => {
        expect(Array.isArray(items)).toEqual(true);
      });

      it("should have all items in the items array", () => {
        expect(items.length).toEqual(5);
      });
    })

    describe("#updateQuality", () => {
      shop.updateQuality()

    })
  })
});
