import React from 'react'

function Codes() {
    return (
        <section className="code-lines mt-8 overflow-hidden flex flex-col gap-4 py-10">
            <h2 data-text="const encryptedMessage = [...new Set([...Array.from('IntimidatingCode')].map((char, index) =&gt; String.fromCharCode(char.charCodeAt(0) + index))).join('')];" 
            className="glowing relative animate-marquee_left font-medium whitespace-nowrap text-lg lg:text-3xl text-[#f6b8a5] font-SourceCodePro after:absolute after:content-[attr(data-text)] after:top-0 after:left-0 after:opacity-60 after:blur after:h-full after:w-full">
                {"Just come outside for the night (yeah) Take your time, get your light (yeah) Johnny Dang, huh-uh I been out geekin' Bitch Just come outside for the night (yeah) Take your time, get your light (yeah) Johnny Dang,"}          
                 </h2>
            <h2
                data-text="func removeDuplicates(slice []string) []string { keys, list := make(map[string]bool), []string{}; for _, entry := range slice { if _, value := keys[entry]; !value { keys[entry], list = true, append(list, entry) } }; return list }"
                className="glowing relative animate-marquee_right font-medium whitespace-nowrap text-lg lg:text-3xl text-[#f1e170] font-SourceCodePro after:absolute after:content-[attr(data-text)] after:top-0 after:left-0 after:opacity-60 after:blur after:h-full after:w-full">
                {"Fein', fein', fein', fein'-fein' (yeah) Fein', fein', fein', fein'-fein' (yeah) Fein', fein', fein', fein'-fein' Fein', fein', fein', fein' (yeah) fein'-fein' (yeah) Fein', fein', fein', fein'-fein' Fein', fein', fein', fein' (yeah)"}
            </h2>
            <h2
                data-text="int main() { std::string original = 'DifferentCode'; std::vector&lt;char&gt; encrypted; std::transform(original.begin(), original.end(), std::back_inserter(encrypted), [](char c) { return c + 1; }); std::sort(encrypted.begin(), encrypted.end()); encrypted.erase(std::unique(encrypted.begin(), encrypted.end()), encrypted.end()); std::cout &lt;&lt; std::string(encrypted.begin(), encrypted.end()) &lt;&lt; std::endl; return 0; }"
                className="glowing relative animate-marquee_left font-medium whitespace-nowrap text-lg lg:text-3xl text-[#b5d161] font-SourceCodePro after:absolute after:content-[attr(data-text)] after:top-0 after:left-0 after:opacity-60 after:blur after:h-full after:w-full">
                {"The career's more at stake when you in your prime (at stake) Fuck that paper, baby, my face on the dotted line (dot, yeah) The career's more at stake when you in your prime (at stake) Fuck that paper,"}
            </h2>
            <h2 data-text="from django.db import models; class MyModel(models.Model): name = models.CharField(max_length=255); age = models.IntegerField()" 
            className="glowing relative animate-marquee_right font-medium whitespace-nowrap text-lg lg:text-3xl text-[#82d3cf] font-SourceCodePro after:absolute after:content-[attr(data-text)] after:top-0 after:left-0 after:opacity-60 after:blur after:h-full after:w-full">
                {"I been flyin' out of town for some peace of mind (yeah, yeah, bitch) It's like always they just want a piece of mine (ah) I been focused on the future, never on right now (ah)"}
            </h2>
            <h2 data-text="import cv2; img = cv2.imread('path/to/image.jpg'); gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY); cv2.imwrite('output.jpg', cv2.GaussianBlur(gray, (5, 5), 0))" 
            className="glowing relative animate-marquee_left font-medium whitespace-nowrap text-lg lg:text-3xl text-[#bc9af9] font-SourceCodePro after:absolute after:content-[attr(data-text)] after:top-0 after:left-0 after:opacity-60 after:blur after:h-full after:w-full">
                {"But I'm sippin' that kombucha, either pink or brown (it's lit) I'm the one that introduced you to the you right now (mm, let's go) Oh my God, that bitch bite (that bitch bite)"}
            </h2>
        </section>
    );
}

export default Codes