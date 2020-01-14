class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      item.updateQuality()
    })

    return this.items;
  }
}

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class AgedBrie extends Item {
  constructor(sellIn, quality){
    super("Aged Brie", sellIn, quality)
  }

  updateQuality() {
    this.quality < 50 ? this.quality += 1 : 50
    this.sellIn -= 1
  }
}

class BackstagePass extends Item {
  constructor(sellIn, quality){
    super("Backstage passes to a TAFKAL80ETC concert", sellIn, quality)
  }

  updateQuality() {
    switch(true) {

      case (this.sellIn > 10):
        this.quality += 1
        break;

      case (this.sellIn > 5 && this.sellIn <= 10):
        this.quality += 2
        break;

      case (this.sellIn > 0 && this.sellIn <= 5):
        this.quality += 3
        break;

      default:
        this.quality = 0

    }
    this.sellIn -= 1
  }
}

class ConjuredItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateQuality() {
    this.sellIn < 0 ? this.quality -= 4 : this.quality -= 2
    this.quality = (this.quality < 0) ? 0 : this.quality
    this.sellIn -= 1
  }
}

class NormalItem extends Item {
  constructor(name, sellIn, quality){
    super(name, sellIn, quality)
  }

  updateQuality() {
    this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1
    this.quality = (this.quality < 0) ? 0 : this.quality
    this.sellIn -= 1
  }
}

class Sulfuras extends Item {
  constructor(sellIn, quality){
    super("Sulfuras, Hand of Ragnaros", sellIn, quality)
  }

  updateQuality() {}
}

module.exports = { Item, Shop, Sulfuras, AgedBrie, NormalItem, BackstagePass, ConjuredItem }
