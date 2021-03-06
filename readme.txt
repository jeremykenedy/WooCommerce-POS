=== WooCommerce Point of Sale (POS) ===
Contributors: kilbot
Tags: cart, e-commerce, ecommerce, inventory, point-of-sale, pos, sales, sell, shop, shopify, store, vend, woocommerce,  wordpress-ecommerce
Requires at least: 4.0 & WooCommerce 2.2
Tested up to: 4.2
Stable tag: 0.3.5
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Finally, a Point of Sale plugin for WooCommerce! Sell online and in your physical retail store - no monthly fees, no need to sync inventory.

== Description ==

WooCommerce POS is a simple interface for taking orders at the Point of Sale using your [WooCommerce](http://www.woothemes.com/woocommerce/) store. WooCommerce POS provides an alternative to Vend or Shopify POS - no need to sync inventory and no monthly subscription fees.

= DEMO = 
You can see a demo of the WooCommerce POS plugin in action by going to [http://demo.woopos.com.au/pos](http://demo.woopos.com.au/pos) with `login/pass` : `demo/demo`

= MORE INFO = 
* Website: http://woopos.com.au
* Roadmap: http://woopos.com.au/roadmap
* GitHub: https://github.com/kilbot/WooCommerce-POS
* Translate: http://translate.woopos.com.au
* Upgrade to Pro: http://woopos.com.au/pro

= REQUIREMENTS =
* WooCommerce >= 2.2.0
* [A modern browser](http://woopos.com.au/faq/browser-compatibility/)

== Installation ==

= Automatic installation = 
1. Go to Plugins screen and select Add New.
2. Search for "WooCommerce POS" in the WordPress Plugin Directory.
3. Install the plugin
4. Click Activate Plugin to activate it.

= Pro installation = 
If you have purchased a license for [WooCommerce POS Pro](http://woopos.com.au/pro) please follow the steps below to install and activate the plugin:

1. Go to: http://woopos.com.au/my-account/
2. Under My Downloads, click the download link and save the plugin to your desktop.
3. Then go to your site, login and go to the Add New Plugin page, eg: http://<yourstore.com>/wp-admin/plugin-install.php?tab=upload
4. Upload the plugin zip file from your desktop and activate.
5. Next, go to the POS Settings page and enter your License Key and License Email to complete the activation.

= Manual installation = 
To install a WordPress Plugin manually:

1. Download the WooCommerce POS plugin to your desktop.
2. If downloaded as a zip archive, extract the Plugin folder to your desktop.
3. With your FTP program, upload the Plugin folder to the wp-content/plugins folder in your WordPress directory online.
4. Go to Plugins screen and find the newly uploaded Plugin in the list.
5. Click Activate Plugin to activate it.

== Frequently Asked Questions ==

= Where can I find more information on WooCommerce POS? =
There is more information on our website at [woopos.com.au](http://woopos.com.au).
Try:
* [FAQ](http://woopos.com.au/faq)
* [Documentation](http://woopos.com.au/docs)
* [Blog](http://woopos.com.au/blog)

= Where can I request a feature? =
Visit the [Roadmap](http://woopos.com.au/roadmap) for information on what is coming in the next version of WooCommerce POS. If your feature isn't mentioned leave a request in the comments.

= Where can I get support? =
WooCommerce POS has a support page within the plugin (eg: http://*<yourstore>*/pos/support). If you are experiencing an error or problem please visit this support page and send a message using the form provided. This form will attach important information we need to assist you.

= Where can I report bugs? =
Bugs can be reported on the [WooCommerce POS GitHub repository](https://github.com/kilbot/WooCommerce-POS/issues).

== Screenshots ==

1. WooCommerce POS main screen

== Changelog ==

= 0.4 =
* TODO: floating point numbers as qty
* TODO: custom receipts
* TODO: add Cash and Card to order drop down
* TODO: custom barcode field
* TODO: fix customer search for network blogs
* TODO: https support
* TODO: check email template, customer name
* TODO: check stock reduction
* TODO: percentage bug
* TODO: support for Simplify Commerce by MasterCard
* TODO: look at POS Only issue with categories
* TODO: POS orders in trash
* TODO: pos only where called twice?
* TODO: change change bug 1,000+
* TODO: make image src protocol-relative
* TODO: strip script tags from checkout template: using
* TODO: remove 0.00 discount from receipt
* TODO: two tabs open, remove database, both try to update
* TODO: harden against CORS w/ relative urls
* TODO: add amount tendered and change to receipt
* TODO: price set to 0.001 with 3 decimal precision shows 0.00 in cart
* New: set custom permalink for POS front-end, eg: http://yourstore.com/custom-slug/
* Fix: removed all cases of php echo shorthand for short_open_tag=off

= 0.3.5 =
* Note: this is a minor compatibility update for WooCommerce 2.3
* Fix WC_Gateway_Mijireh error with WC 2.3
* Fix for W3 Total Cache minify js conflict
* Fix capitalization bug with product searches

= 0.3.4 =
* Urgent Fix: performance issue downloading products
* Fix: potential clash for admin menu position
* Fix: bug affecting woocommerce_api_order_response
* Fix: cashback entry on receipt
* Improved: POS Only products

= 0.3.3 =
* Urgent Fix: Compatibility with new order-status introduced in WooCommerce > 2.2
* Fix: POS Only products improved, fixes 404 errors on imported products
* Fix: IndexedDB now available on Safari 7.1, compatibility update to db
* Fix: bug effecting default customer setting
* Fix: added support for Simplify Commerce by Mastercard
* Improved: product thumbnails, support for non-cropped thumbs
* Improved: clearing local database improved for large stores

= 0.3.2 =
* Urgent Fix: POS bug causing problems with product display on some websites, eg: featured products
* Fix: refresh button on offsite payment receipts
* Fix: managing_stock for variations

= 0.3.1 =
* [read blog post](http://woopos.com.au/2014/08/version-0-3-1-released/)
* New: choose which user roles have access to POS
* New: set products as visible to POS Only or Online Only
* New: filter products in WP-Admin by POS Only or Online Only
* New: filter orders in WP-Admin by POS or Online
* New: hierarchical UI for variable products, improves experience for products with large number of variations
* New: product filters, filter by category ( eg: cat:music ) or any attribute ( eg: in_stock:true )
* New: quick tabs for filtering products All, Featured ( featured:true ) and On Sale ( on_sale:true )
* New: number pad for quick entry via mouse or touch
* New: Payment Gateway settings, enable POS only gateways and reorder through new settings tab
* New: Payment Gateway processing (tested on some gateways but still experimental)
* New: change calculated for Cash sales
* New: cashback option for Card sales
* New: Link to POS from admin menu (sorry!)
* New: [Debug flag](http://woopos.com.au/docs/debugging/) for Javascript console logging
* New: Greek translation thanks to Marios Polycarpou! [http://el.woopos.com.au/pos](http://el.woopos.com.au/pos)
* New: German translation thanks to Simon Potye! [http://de.woopos.com.au/pos](http://de.woopos.com.au/pos)
* New: Danish translation thanks to Thomas Clausen! [http://da.woopos.com.au/pos](http://da.woopos.com.au/pos)
* Improved: Most JS has been rewritten to improve performance and extensibility
* Improved: Initial download of products, improved performance for large stores and/or slow servers
* Improved: Notes are now handled like Customer Notes for display on receipts
* Fix: Authenication no longer relies on cookies, should fix authentication issues for some users
* Fix: Bug preventing product display on Safari for subfolder installs of WordPress
* Fix: Bug effecting admin settings for translation users

* Pro Feature: Pro users can enable any Payment Gateway. [Upgrade to Pro](http://woopos.com.au/pro)

= 0.3 =
* New: Set default POS customer on new settings page
* New: Add customer to order
* New: Documentation for third party developers [http://kilbot.github.io/WooCommerce-POS/](http://kilbot.github.io/WooCommerce-POS/)
* New: pt_BR translation thanks to Hermes Alves Dias Souza! [http://pt.woopos.com.au/pos](http://pt.woopos.com.au/pos)
* New: Icons for mobile devices. Thanks [@sixthcore](https://github.com/kilbot/WooCommerce-POS/issues/11)!
* Fix: stock is now synced after each order
* Fix: Add-to-cart bug for particular tax settings (tax enabled + prices exclusive from tax + no tax rates set)
* Fix: product display for sites where home_url != site_url
* Fix: authentication test for subfolder wordpress installs