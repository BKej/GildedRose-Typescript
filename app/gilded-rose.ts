export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

// Next step: improve codes within each functions for different types;

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    //functions to check quality
    checkQualityBelowFifty(i) {
        if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
        }
    }

    //functions for differet items types
    updateQualityNormalItems(i) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        if (this.items[i].sellIn >= 0 && this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1
        }
        if (this.items[i].sellIn < 0 && this.items[i].quality > 1) {
            this.items[i].quality = this.items[i].quality - 2
        }
    }

    updateQualityAgedBrie(i) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        this.checkQualityBelowFifty(i)
        if (this.items[i].sellIn < 0) {
            this.checkQualityBelowFifty(i)
        }
    }

    updateQualityBackstage(i) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
        this.checkQualityBelowFifty(i)
        if (this.items[i].sellIn < 11) {
            this.checkQualityBelowFifty(i)
        }
        if (this.items[i].sellIn < 6) {
            this.checkQualityBelowFifty(i)
        }
        if (this.items[i].sellIn < 0) {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
        }
    }

    updateQualitySulfuras(i) {
        this.items[i].quality = this.items[i].quality
        this.items[i].sellIn = this.items[i].sellIn
    }

    //the main function
    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name === 'Aged Brie') {
                this.updateQualityAgedBrie(i)
            }

            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                this.updateQualityBackstage(i)
            }

            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
                this.updateQualitySulfuras(i)
            }

            if (this.items[i].name !== 'Sulfuras, Hand of Ragnaros' && this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Aged Brie') {
                this.updateQualityNormalItems(i)
            }
        }
        return this.items;
    }
}




