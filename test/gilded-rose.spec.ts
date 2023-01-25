import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    //testing functions for normal items:
    it('should decrease sellIn by 1 for Normal items', function () {
        const gildedRose = new GildedRose([new Item('foo1', 5, 20), new Item('foo2', 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[1].sellIn).to.equal(-1);
    });

    it('should decrease quality by 1 if sellIn >= 0 and quality > 0 for Normal Items', function () {
        const gildedRose = new GildedRose([new Item('foo', 3, 23), new Item('Potato', 1, 1)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(22);
        expect(items[1].quality).to.equal(0);
    });

    it('should decrease quality by 2 if sellIn < 0 but quality > 1 for Normal Items', function () {
        const gildedRose = new GildedRose([new Item('foo', -2, 2)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });


    //testing functions for special cases
    //1.special case Aged Brie:
    it('should decrease sellIn by 1 for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50), new Item('Aged Brie', 0, 50)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[1].sellIn).to.equal(-1);
    });

    it('should increase quality by 1 if quality < 50 for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });


    it('should remain same if quality >= 50 for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50), new Item('Aged Brie', 10, 68)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
        expect(items[1].quality).to.equal(68);
    });

    it('should increase quality by 2 if sellIn < 0 for Aged Brie', function () {
        const gildedRose = new GildedRose([new Item('Aged Brie', -2, 40)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(42);
    });

    //2.testing functions for BackStage passes:

    it('should decrease sellIn by 1 for Backstage passes', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20), new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[1].sellIn).to.equal(-1);
    });

    it('should increase quality by 1 if quality < 50 but sellIn > 10 for Backstage passes', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 49)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(11);
        expect(items[0].quality).to.equal(50);
    });

    it('should remain same if quality is greater than or equal to 50 for Backstage passes', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50), new Item('Backstage passes to a TAFKAL80ETC concert', 10, 70)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
        expect(items[1].quality).to.equal(70);
    });

    it('should increase quality by 2 if sellIn is less than 11 and if quality is less than 50 for Backstage passes', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(32);
    });

    it('should increase quality by 3 if sellIn is less than 6 and if quality is less than 50 for Backstage passes', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(23);
    });

    it('should reset quality to 0 if sellIn is less than 0', function () {
        const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

    //testing functions for Sulfuras
    it('should be same sellIn and quality for Sulfuras', function () {
        const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -1, 20), new Item('Sulfuras, Hand of Ragnaros', 15, 80), new Item('Sulfuras, Hand of Ragnaros', 3, 32)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(20)
        expect(items[1].sellIn).to.equal(15)
        expect(items[1].quality).to.equal(80);
        expect(items[2].sellIn).to.equal(3)
        expect(items[2].quality).to.equal(32);
    });

});
