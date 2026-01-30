import { test, expect } from '@playwright/test';

test.describe('Sinhala Transliteration - 35 Test Cases', () => {

  const testCases = [

    // ================= POSITIVE FUNCTIONAL =================
    { id: "Pos_Fun_0001", name: "Convert short greeting", input: "oyaata kohomadha?", expected: "ඔයාට කොහොමද?" },
    { id: "Pos_Fun_0002", name: "Convert polite request", input: "mata help ekak karanna puluvandha?", expected: "මට help එකක් කරන්න පුලුවන්ද?" },
    { id: "Pos_Fun_0003", name: "Convert daily sentence", input: "mama gedhara yanava", expected: "මම ගෙදර යනව" },
    { id: "Pos_Fun_0004", name: "Convert mixed Singlish + English", input: "mama office ekata yanna ona", expected: "මම office එකට යන්න ඔන" },
    { id: "Pos_Fun_0005", name: "Convert polite instruction", input: "karunakarala eka denna", expected: "කරුනකරල එක ඩෙන්න" },
    { id: "Pos_Fun_0006", name: "Convert medium sentence", input: "mama heta school yanna hadanava", expected: "මම හෙට school යන්න හඩනව" },
    { id: "Pos_Fun_0007", name: "Convert question sentence", input: "oyata hari lassanada?", expected: "ඔයට හරි ලස්සනඩ?" },
    { id: "Pos_Fun_0008", name: "Convert formal sentence", input: "oba mage sahodaraya", expected: "ඔබ mage සහොඩරය" },
    { id: "Pos_Fun_0009", name: "Convert instruction sentence", input: "meka hariyata balanna", expected: "මෙක හරියට බලන්න" },
    { id: "Pos_Fun_0010", name: "Convert emotional sentence", input: "mama oyata adarei", expected: "මම ඔයට අඩරේ" },
    { id: "Pos_Fun_0011", name: "Convert daily routine sentence", input: "mama ude wada karanava", expected: "මම උඩෙ wඅඩ කරනව" },
    { id: "Pos_Fun_0012", name: "Convert short statement", input: "mama lassanai", expected: "මම ලස්සනෛ" },
    { id: "Pos_Fun_0013", name: "Convert polite question", input: "oyata loku amaruda?", expected: "ඔයට ලොකු අමරුඩ?" },
    { id: "Pos_Fun_0014", name: "Convert suggestion sentence", input: "oyata eka hari hodai", expected: "ඔයට එක හරි හොඩෛ" },
    { id: "Pos_Fun_0015", name: "Convert friendly message", input: "machan hari lassanai", expected: "මචන් හරි ලස්සනෛ" },
    { id: "Pos_Fun_0016", name: "Convert reminder sentence", input: "mama oyata heta kiyannam", expected: "මම ඔයට හෙට කියන්නම්" },
    { id: "Pos_Fun_0017", name: "Convert thank-you phrase", input: "bohoma sthuthi", expected: "බොහොම ස්තුති" },
    { id: "Pos_Fun_0018", name: "Convert planning sentence", input: "mama heta travel karanna hadanava", expected: "මම හෙට travel කරන්න හඩනව" },
    { id: "Pos_Fun_0019", name: "Convert warning sentence", input: "oyata loku risk ekak thiyenava", expected: "ඔයට ලොකු risk එකක් තියෙනව" },
    { id: "Pos_Fun_0020", name: "Convert encouragement sentence", input: "oyata puluvan eka karanna", expected: "ඔයට පුලුවන් එක කරන්න" },
    { id: "Pos_Fun_0021", name: "Convert opinion sentence", input: "mage hithanne eka hodai", expected: "mage හිතන්නෙ එක හොඩෛ" },
    { id: "Pos_Fun_0022", name: "Convert apology phrase", input: "samawenna", expected: "සමwඑන්න" },
    { id: "Pos_Fun_0023", name: "Convert farewell sentence", input: "api passe hamuwemu", expected: "අපි පස්සෙ හමුwඑමු" },
    { id: "Pos_Fun_0024", name: "Convert motivational sentence", input: "oyata hari loku deyak karanna puluvan", expected: "ඔයට හරි ලොකු ඩෙයක් කරන්න පුලුවන්" },

    // ================= NEGATIVE FUNCTIONAL =================
    { id: "Neg_Fun_0001", name: "Chat abbreviation input", input: "thx bro", expected: "තx bro" },
    { id: "Neg_Fun_0002", name: "Empty input submission", input: "", expected: "" },
    { id: "Neg_Fun_0003", name: "Unsupported symbols", input: "$$$###", expected: "$$$###" },
    { id: "Neg_Fun_0004", name: "Random keyboard input", input: "asdfghjkl", expected: "අස්ඩ්ෆ්ග්හ්ජ්ක්ල්" },
    { id: "Neg_Fun_0005", name: "Numbers only", input: "123456", expected: "123456" },
    { id: "Neg_Fun_0006", name: "Mixed slang input", input: "bro u ok?", expected: "bro උ ඔක්?" },
    { id: "Neg_Fun_0007", name: "Repeated letters", input: "heyyyyyyy", expected: "හෙය්ය්ය්ය්ය්ය්ය්" },
    { id: "Neg_Fun_0008", name: "Emoji only input", input: "😂😂😂", expected: "😂😂😂" },
    { id: "Neg_Fun_0009", name: "Meaningless long text", input: "randomrandomrandom", expected: "රන්ඩොම්‍රන්ඩොම්‍රන්ඩොම්" },
    { id: "Neg_Fun_0010", name: "Unsupported shorthand", input: "idk brb ttyl", expected: "ඉඩ්ක් බ්‍රබ් ට්ට්ය්ල්" },

    // ================= POSITIVE UI =================
    { id: "Pos_UI_0001", name: "Real-time Sinhala output update", input: "mama gedhara yanava", expected: "මම ගෙදර යනව" }

  ];

  for (const tc of testCases) {
  test(`${tc.id} - ${tc.name}`, async ({ page }) => {

    // 1. Navigate to the Swift Translator website with extended timeout
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'domcontentloaded', timeout: 90000 });

    // 2. Select the Singlish input textarea (using placeholder)
    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const inputSelector = 'textarea[placeholder="Input Your Singlish Text Here."]';

    // Use chunked typing to simulate real user input so the site's IME processes sequences correctly.
    await page.fill(inputSelector, '');
    await inputArea.click();
    const text = tc.input;
    const CHUNK = 200; // characters per chunk to avoid Playwright typing timeouts
    if (text.length === 0) {
      // nothing to type
    } else if (text.length <= CHUNK) {
      await inputArea.type(text, { delay: 35 });
    } else {
      for (let i = 0; i < text.length; i += CHUNK) {
        const chunk = text.slice(i, i + CHUNK);
        await inputArea.type(chunk, { delay: 25 });
        // allow the page to process chunk
        await page.waitForTimeout(100);
      }
    }
    // Ensure compositionend/input events fired after typing
    await page.evaluate((sel) => {
      const el = document.querySelector(sel) as HTMLTextAreaElement | null;
      if (!el) return;
      el.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true, cancelable: true, data: el.value }));
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, inputSelector);

    // 3. Select the output box
    // Based on your HTML, it's a div with bg-slate-50 following the "Sinhala" title
    const outputBox = page.locator('.card:has-text("Sinhala") .bg-slate-50');

    // 4. Wait for the translation to appear (it's automatic)
    // We wait until the text content matches or contains our expected value
    // Allow more time for conversion on slower environments
    await expect(outputBox).toContainText(tc.expected, { timeout: 10000 });

    const output = await outputBox.textContent();
    console.log(`Running: ${tc.id} | Result: ${output}`);

    expect(output).toContain(tc.expected);
  });
}

});