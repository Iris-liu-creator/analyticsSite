export function NetlifyFormDefinitions() {
  return (
    <div hidden aria-hidden="true">
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input name="name" />
        <input name="workEmail" />
        <input name="companyOrganisation" />
        <select name="topic">
          <option>Analytics support / Service package enquiry</option>
        </select>
        <textarea name="message" />
      </form>

      <form name="services-inquiry" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="services-inquiry" />
        <input name="name" />
        <input name="companyEmail" />
        <input name="companyName" />
        <textarea name="currentChallenge" />
        <select name="budgetRange">
          <option>Not sure yet</option>
        </select>
        <select name="preferredTimeline">
          <option>ASAP</option>
        </select>
        <input name="requestDemo" type="checkbox" />
      </form>
    </div>
  );
}
