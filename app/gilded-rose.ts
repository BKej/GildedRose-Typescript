export class Item {
    name: string
    sellIn: number
    quality: number

    constructor(name, sellIn, quality) {
        this.name = name
        this.sellIn = sellIn
        this.quality = quality
    }


    // Next step: improve codes within each functions for different types;
    //functions for differet items types
    updateQualityNormalItems() {
        this.sellIn--
        if (this.sellIn < 0) {
            //using math.max to set to either 0 or this.quality -2, whichever is greater
            this.quality = Math.max(0, this.quality - 2)
        }
        else { this.quality = Math.max(0, this.quality - 1) }
    }

    updateQualityAgedBrie() {
        this.sellIn--
        if (this.quality < 50) this.quality++
        if (this.sellIn < 0) this.quality++
    }

    updateQualityBackstage() {
        this.sellIn--
        if (this.quality < 50) {
            if (this.sellIn > 10) {
                this.quality += 1
            } else if (this.sellIn > 5 && this.sellIn <= 10) {
                this.quality += 2
            } else if (this.sellIn > 0 && this.sellIn <= 5) {
                this.quality += 3
            } else {
                this.quality = 0
            }
        }
    }

    conjuredManaCakeCheck() {
        this.sellIn--
        if (this.sellIn < 0) {
            //using math.max to set to either 0 or this.quality -2, whichever is greater
            this.quality = Math.max(0, this.quality - 4)
        }
        else { this.quality = Math.max(0, this.quality - 2) }
    }
}

export class GildedRose {
    items: Array<Item>

    constructor(items = [] as Array<Item>) {
        this.items = items
    }

    //the main function
    updateQuality() {
        for (const item of this.items) {

            switch (item.name) {
                case "Aged Brie":
                    item.updateQualityAgedBrie()
                    break
                case "Backstage passes to a TAFKAL80ETC concert":
                    item.updateQualityBackstage()
                    break
                case "Sulfuras, Hand of Ragnaros":
                    break
                case "Conjured Mana Cake":
                    item.conjuredManaCakeCheck()
                    break
                default:
                    item.updateQualityNormalItems()
                    break
            }
        }
        return this.items
    }
}





