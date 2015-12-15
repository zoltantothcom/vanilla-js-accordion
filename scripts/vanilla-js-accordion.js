/**
* @fileOverview
* @author Zoltan Toth
* @version 0.1
*/

/**
* @description
* Vanilla Javascript Accordion
*
* @class
* @param {string} options.elem - The HTML id of the accordion container.
* @param {number} [options.openTab=1] - Start the accordion with this item opened.
* @param {boolean} [options.oneOpen=false] - Just one tab can be open at time.
* @param {string} [options.titleClass="b-accordion__title"] - The HTML class of the tab titles.
* @param {string} [options.contentClass="b-accordion__content"] - The HTML class of the tab content.
*/
Accordion = function(options) {
    var elem = document.getElementById(options.elem),
        openTab = options.open || undefined,
        oneOpen = options.oneOpen || false,
        titleClass = "b-accordion__title",
        contentClass = "b-accordion__content";
        
    render();
    
    /**
     * Initial rendering of the accordion.
     */
    function render() {
        elem.addEventListener("click", onClick);
        closeAll();
        if (openTab) open(openTab);
    }

    /**
     * Handles clicks on the accordion.
     * 
     * @param {object} e - Element the click occured on.
     */
    function onClick(e) {
        if (e.target.className.indexOf(titleClass) === -1) return;
        
        if (oneOpen) closeAll();
        toggle(e.target.nextElementSibling);
    }
    
    /**
     * Closes all accordion tabs.
     */
    function closeAll() {
        [].forEach.call(elem.querySelectorAll("." + contentClass), function(item) {
            item.style.display = "none";
        });
    }
    
    /**
     * Toggles corresponding tab for each title clicked.
     * 
     * @param {object} el - The content tab to show or hide.
     */
    function toggle(el) {
        el.style.display = (el.style.display !== "none") ? "none" : "";
    }
    
    /**
     * Opens a tab by index.
     * 
     * @param {number} n - Index of tab to open.
     * 
     * @public
     */
    function open(n) {
        if (oneOpen) closeAll();
        elem.querySelectorAll("." + contentClass)[n - 1].style.display = "";
    }

    /**
     * Closes a tab by index.
     * 
     * @param {number} n - Index of tab to close.
     * 
     * @public
     */
    function close(n) {
        elem.querySelectorAll("." + contentClass)[n - 1].style.display = "none";
    }
    
    this.open = open;
    this.close = close;
}