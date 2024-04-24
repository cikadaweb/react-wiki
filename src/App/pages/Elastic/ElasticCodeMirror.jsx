import React, { useState, useEffect, useCallback } from "react";
import "@elastic/eui/dist/eui_theme_light.css";
import { EuiFlexGroup, EuiFlexItem, EuiProvider } from "@elastic/eui";
import { linter, lintGutter } from "@codemirror/lint";
import CodeMirror from "@uiw/react-codemirror";
import * as yamlMode from "@codemirror/legacy-modes/mode/yaml";
import { StreamLanguage } from "@codemirror/language";
import parser from "js-yaml";
import { githubLight } from "@uiw/codemirror-theme-github";

const yaml = StreamLanguage.define(yamlMode.yaml);

function base64ToBytes(base64) {
    const binString = atob(base64);
    return Uint8Array.from(binString, (m) => m.codePointAt(0));
}

function bytesToBase64(bytes) {
    const binString = String.fromCodePoint(...bytes);
    return btoa(binString);
}

function yamlToJS(yamlText) {
    console.log('yamlText: ', yamlText);
    const jsObject = parser.load(yamlText);
    return jsObject;
}


const response = {
    content:
        "IyBPcGVuU2VhcmNoIERhc2hib2FyZHMgaXMgc2VydmVkIGJ5IGEgYmFjayBlbmQgc2VydmVyLiBUaGlzIHNldHRpbmcgc3BlY2lmaWVzIHRoZSBwb3J0IHRvIHVzZS4Kc2VydmVyLnBvcnQ6IDU2MDEKCiMgU3BlY2lmaWVzIHRoZSBhZGRyZXNzIHRvIHdoaWNoIHRoZSBPcGVuU2VhcmNoIERhc2hib2FyZHMgc2VydmVyIHdpbGwgYmluZC4gSVAgYWRkcmVzc2VzIGFuZCBob3N0IG5hbWVzIGFyZSBib3RoIHZhbGlkIHZhbHVlcy4KIyBUaGUgZGVmYXVsdCBpcyAnbG9jYWxob3N0Jywgd2hpY2ggdXN1YWxseSBtZWFucyByZW1vdGUgbWFjaGluZXMgd2lsbCBub3QgYmUgYWJsZSB0byBjb25uZWN0LgojIFRvIGFsbG93IGNvbm5lY3Rpb25zIGZyb20gcmVtb3RlIHVzZXJzLCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gYSBub24tbG9vcGJhY2sgYWRkcmVzcy4Kc2VydmVyLmhvc3Q6ICIwLjAuMC4wIgoKIyBFbmFibGVzIHlvdSB0byBzcGVjaWZ5IGEgcGF0aCB0byBtb3VudCBPcGVuU2VhcmNoIERhc2hib2FyZHMgYXQgaWYgeW91IGFyZSBydW5uaW5nIGJlaGluZCBhIHByb3h5LgojIFVzZSB0aGUgYHNlcnZlci5yZXdyaXRlQmFzZVBhdGhgIHNldHRpbmcgdG8gdGVsbCBPcGVuU2VhcmNoIERhc2hib2FyZHMgaWYgaXQgc2hvdWxkIHJlbW92ZSB0aGUgYmFzZVBhdGgKIyBmcm9tIHJlcXVlc3RzIGl0IHJlY2VpdmVzLCBhbmQgdG8gcHJldmVudCBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgYXQgc3RhcnR1cC4KIyBUaGlzIHNldHRpbmcgY2Fubm90IGVuZCBpbiBhIHNsYXNoLgojc2VydmVyLmJhc2VQYXRoOiAiIgoKIyBTcGVjaWZpZXMgd2hldGhlciBPcGVuU2VhcmNoIERhc2hib2FyZHMgc2hvdWxkIHJld3JpdGUgcmVxdWVzdHMgdGhhdCBhcmUgcHJlZml4ZWQgd2l0aAojIGBzZXJ2ZXIuYmFzZVBhdGhgIG9yIHJlcXVpcmUgdGhhdCB0aGV5IGFyZSByZXdyaXR0ZW4gYnkgeW91ciByZXZlcnNlIHByb3h5Lgojc2VydmVyLnJld3JpdGVCYXNlUGF0aDogZmFsc2UKCiMgVGhlIG1heGltdW0gcGF5bG9hZCBzaXplIGluIGJ5dGVzIGZvciBpbmNvbWluZyBzZXJ2ZXIgcmVxdWVzdHMuCiNzZXJ2ZXIubWF4UGF5bG9hZEJ5dGVzOiAxMDQ4NTc2CgojIFRoZSBPcGVuU2VhcmNoIERhc2hib2FyZHMgc2VydmVyJ3MgbmFtZS4gIFRoaXMgaXMgdXNlZCBmb3IgZGlzcGxheSBwdXJwb3Nlcy4KI3NlcnZlci5uYW1lOiAieW91ci1ob3N0bmFtZSIKCiMgVGhlIFVSTHMgb2YgdGhlIE9wZW5TZWFyY2ggaW5zdGFuY2VzIHRvIHVzZSBmb3IgYWxsIHlvdXIgcXVlcmllcy4Kb3BlbnNlYXJjaC5ob3N0czogWyJodHRwczovLzE5Mi4xNjguNi4yMzU6OTIwMCJdCm9wZW5zZWFyY2guc3NsLnZlcmlmaWNhdGlvbk1vZGU6IG5vbmUKb3BlbnNlYXJjaC51c2VybmFtZTogImFkbWluIgpvcGVuc2VhcmNoLnBhc3N3b3JkOiAiYWRtaW4iCm9wZW5zZWFyY2gucmVxdWVzdEhlYWRlcnNXaGl0ZWxpc3Q6IFsgYXV0aG9yaXphdGlvbixzZWN1cml0eXRlbmFudCBdCgojIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyB1c2VzIGFuIGluZGV4IGluIE9wZW5TZWFyY2ggdG8gc3RvcmUgc2F2ZWQgc2VhcmNoZXMsIHZpc3VhbGl6YXRpb25zIGFuZAojIGRhc2hib2FyZHMuIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyBjcmVhdGVzIGEgbmV3IGluZGV4IGlmIHRoZSBpbmRleCBkb2Vzbid0IGFscmVhZHkgZXhpc3QuCiNvcGVuc2VhcmNoRGFzaGJvYXJkcy5pbmRleDogIi5vcGVuc2VhcmNoX2Rhc2hib2FyZHMiCgojIFRoZSBkZWZhdWx0IGFwcGxpY2F0aW9uIHRvIGxvYWQuCiNvcGVuc2VhcmNoRGFzaGJvYXJkcy5kZWZhdWx0QXBwSWQ6ICJob21lIgoKIyBTZXR0aW5nIGZvciBhbiBvcHRpbWl6ZWQgaGVhbHRoY2hlY2sgdGhhdCBvbmx5IHVzZXMgdGhlIGxvY2FsIE9wZW5TZWFyY2ggbm9kZSB0byBkbyBEYXNoYm9hcmRzIGhlYWx0aGNoZWNrLgojIFRoaXMgc2V0dGluZ3Mgc2hvdWxkIGJlIHVzZWQgZm9yIGxhcmdlIGNsdXN0ZXJzIG9yIGZvciBjbHVzdGVycyB3aXRoIGluZ2VzdCBoZWF2eSBub2Rlcy4KIyBJdCBhbGxvd3MgRGFzaGJvYXJkcyB0byBvbmx5IGhlYWx0aGNoZWNrIHVzaW5nIHRoZSBsb2NhbCBPcGVuU2VhcmNoIG5vZGUgcmF0aGVyIHRoYW4gZmFuIG91dCByZXF1ZXN0cyBhY3Jvc3MgYWxsIG5vZGVzLgojCiMgSXQgcmVxdWlyZXMgdGhlIHVzZXIgdG8gY3JlYXRlIGFuIE9wZW5TZWFyY2ggbm9kZSBhdHRyaWJ1dGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSB2YWx1ZSB1c2VkIGluIHRoZSBzZXR0aW5nCiMgVGhpcyBub2RlIGF0dHJpYnV0ZSBzaG91bGQgYXNzaWduIGFsbCBub2RlcyBvZiB0aGUgc2FtZSBjbHVzdGVyIGFuIGludGVnZXIgdmFsdWUgdGhhdCBpbmNyZW1lbnRzIHdpdGggZWFjaCBuZXcgY2x1c3RlciB0aGF0IGlzIHNwdW4gdXAKIyBlLmcuIGluIG9wZW5zZWFyY2gueW1sIGZpbGUgeW91IHdvdWxkIHNldCB0aGUgdmFsdWUgdG8gYSBzZXR0aW5nIHVzaW5nIG5vZGUuYXR0ci5jbHVzdGVyX2lkOgojIFNob3VsZCBvbmx5IGJlIGVuYWJsZWQgaWYgdGhlcmUgaXMgYSBjb3JyZXNwb25kaW5nIG5vZGUgYXR0cmlidXRlIGNyZWF0ZWQgaW4geW91ciBPcGVuU2VhcmNoIGNvbmZpZyB0aGF0IG1hdGNoZXMgdGhlIHZhbHVlIGhlcmUKI29wZW5zZWFyY2gub3B0aW1pemVkSGVhbHRoY2hlY2suaWQ6ICJjbHVzdGVyX2lkIgojb3BlbnNlYXJjaC5vcHRpbWl6ZWRIZWFsdGhjaGVjay5maWx0ZXJzOiB7CiMgIGF0dHJpYnV0ZV9rZXk6ICJhdHRyaWJ1dGVfdmFsdWUiLAojfQoKIyBJZiB5b3VyIE9wZW5TZWFyY2ggaXMgcHJvdGVjdGVkIHdpdGggYmFzaWMgYXV0aGVudGljYXRpb24sIHRoZXNlIHNldHRpbmdzIHByb3ZpZGUKIyB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIHRoYXQgdGhlIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyBzZXJ2ZXIgdXNlcyB0byBwZXJmb3JtIG1haW50ZW5hbmNlIG9uIHRoZSBPcGVuU2VhcmNoIERhc2hib2FyZHMKIyBpbmRleCBhdCBzdGFydHVwLiBZb3VyIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyB1c2VycyBzdGlsbCBuZWVkIHRvIGF1dGhlbnRpY2F0ZSB3aXRoIE9wZW5TZWFyY2gsIHdoaWNoCiMgaXMgcHJveGllZCB0aHJvdWdoIHRoZSBPcGVuU2VhcmNoIERhc2hib2FyZHMgc2VydmVyLgojb3BlbnNlYXJjaC51c2VybmFtZTogIm9wZW5zZWFyY2hfZGFzaGJvYXJkc19zeXN0ZW0iCiNvcGVuc2VhcmNoLnBhc3N3b3JkOiAicGFzcyIKCiMgRW5hYmxlcyBTU0wgYW5kIHBhdGhzIHRvIHRoZSBQRU0tZm9ybWF0IFNTTCBjZXJ0aWZpY2F0ZSBhbmQgU1NMIGtleSBmaWxlcywgcmVzcGVjdGl2ZWx5LgojIFRoZXNlIHNldHRpbmdzIGVuYWJsZSBTU0wgZm9yIG91dGdvaW5nIHJlcXVlc3RzIGZyb20gdGhlIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyBzZXJ2ZXIgdG8gdGhlIGJyb3dzZXIuCiNzZXJ2ZXIuc3NsLmVuYWJsZWQ6IGZhbHNlCiNzZXJ2ZXIuc3NsLmNlcnRpZmljYXRlOiAvcGF0aC90by95b3VyL3NlcnZlci5jcnQKI3NlcnZlci5zc2wua2V5OiAvcGF0aC90by95b3VyL3NlcnZlci5rZXkKCiMgT3B0aW9uYWwgc2V0dGluZ3MgdGhhdCBwcm92aWRlIHRoZSBwYXRocyB0byB0aGUgUEVNLWZvcm1hdCBTU0wgY2VydGlmaWNhdGUgYW5kIGtleSBmaWxlcy4KIyBUaGVzZSBmaWxlcyBhcmUgdXNlZCB0byB2ZXJpZnkgdGhlIGlkZW50aXR5IG9mIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyB0byBPcGVuU2VhcmNoIGFuZCBhcmUgcmVxdWlyZWQgd2hlbgojIHhwYWNrLnNlY3VyaXR5Lmh0dHAuc3NsLmNsaWVudF9hdXRoZW50aWNhdGlvbiBpbiBPcGVuU2VhcmNoIGlzIHNldCB0byByZXF1aXJlZC4KI29wZW5zZWFyY2guc3NsLmNlcnRpZmljYXRlOiAvcGF0aC90by95b3VyL2NsaWVudC5jcnQKI29wZW5zZWFyY2guc3NsLmtleTogL3BhdGgvdG8veW91ci9jbGllbnQua2V5CgojIE9wdGlvbmFsIHNldHRpbmcgdGhhdCBlbmFibGVzIHlvdSB0byBzcGVjaWZ5IGEgcGF0aCB0byB0aGUgUEVNIGZpbGUgZm9yIHRoZSBjZXJ0aWZpY2F0ZQojIGF1dGhvcml0eSBmb3IgeW91ciBPcGVuU2VhcmNoIGluc3RhbmNlLgojb3BlbnNlYXJjaC5zc2wuY2VydGlmaWNhdGVBdXRob3JpdGllczogWyAiL3BhdGgvdG8veW91ci9DQS5wZW0iIF0KCiMgVG8gZGlzcmVnYXJkIHRoZSB2YWxpZGl0eSBvZiBTU0wgY2VydGlmaWNhdGVzLCBjaGFuZ2UgdGhpcyBzZXR0aW5nJ3MgdmFsdWUgdG8gJ25vbmUnLgojb3BlbnNlYXJjaC5zc2wudmVyaWZpY2F0aW9uTW9kZTogZnVsbAoKIyBUaW1lIGluIG1pbGxpc2Vjb25kcyB0byB3YWl0IGZvciBPcGVuU2VhcmNoIHRvIHJlc3BvbmQgdG8gcGluZ3MuIERlZmF1bHRzIHRvIHRoZSB2YWx1ZSBvZgojIHRoZSBvcGVuc2VhcmNoLnJlcXVlc3RUaW1lb3V0IHNldHRpbmcuCiNvcGVuc2VhcmNoLnBpbmdUaW1lb3V0OiAxNTAwCgojIFRpbWUgaW4gbWlsbGlzZWNvbmRzIHRvIHdhaXQgZm9yIHJlc3BvbnNlcyBmcm9tIHRoZSBiYWNrIGVuZCBvciBPcGVuU2VhcmNoLiBUaGlzIHZhbHVlCiMgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIuCiNvcGVuc2VhcmNoLnJlcXVlc3RUaW1lb3V0OiAzMDAwMAoKIyBFbmFibGVzIHRoZSBtZW1vcnkgY2lyY3VpdCBicmVha2VyIHRoYXQgcHJldmVudHMgaGVhcCBvdXQgb2YgbWVtb3J5IGVycm9ycyBmb3IgbGFyZ2UgcXVlcnkgcmVzcG9uc2VzLgojIElmIGVuYWJsZWQsIHdlIHdpbGwgcHJvdmlkZSBhZGRpdGlvbmFsIGNoZWNrIHRvIHByZXZlbnQgcG90ZW50aWFsIG91dCBvZiBtZW1vcnkgZXJyb3IgaW4gQG9wZW5zZXJhY2gtcHJvamVjdC9vcGVuc2VhcmNoLgojIFRoZSBkZWZhdWx0IHRocmVzaG9sZCBpcyBiYXNlZCBvbiB0aGUgYG1heC1vbGQtc3BhY2Utc2l6ZWAgb2YgTm9kZUpTLiBJdCBpcyBjb25maWd1cmFibGUgYnkgdHVuaW5nIGBvcGVuc2VhcmNoLm1lbW9yeUNpcmN1aXRCcmVha2VyLm1heFBlcmNlbnRhZ2VgLgojb3BlbnNlYXJjaC5tZW1vcnlDaXJjdWl0QnJlYWtlci5lbmFibGVkOiBmYWxzZQoKIyBUaGUgcGVjZW50YWdlIG9mIG1heGltdW0gaGVhcCBhbGxvd2VkIGZvciBwcm9jZXNzaW5nIHJlc3BvbnNlLiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiB0aGUgcGVjZW50YWdlIGlzIGAxLjBgLiBUaGUgdmFsaWQgaW5wdXQgcmFuZ2Ugc2hvdWxkIGJlIFswLCAxXSBpbmNsdXNpdmVseS4KIyBGb3IgcmVmZXJlbmNlLCB0aGUgYHRocmVzaG9sZCBvZiBtZW1vcnlDaXJjdWl0QnJlYWtlcmAgPSBgbWF4LW9sZC1zcGFjZS1zaXplIG9mIE5vZGVKU2AgKiBgb3BlbnNlYXJjaC5tZW1vcnlDaXJjdWl0QnJlYWtlci5tYXhQZXJjZW50YWdlYAojb3BlbnNlYXJjaC5tZW1vcnlDaXJjdWl0QnJlYWtlci5tYXhQZXJjZW50YWdlOiAxLjAKCiMgREVQUkVDQVRFRDogVXNlIG9wZW5zZWFyY2gucmVxdWVzdEhlYWRlcnNBbGxvd2xpc3QKIyBMaXN0IG9mIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyBjbGllbnQtc2lkZSBoZWFkZXJzIHRvIHNlbmQgdG8gT3BlblNlYXJjaC4gVG8gc2VuZCAqbm8qIGNsaWVudC1zaWRlCiMgaGVhZGVycywgc2V0IHRoaXMgdmFsdWUgdG8gW10gKGFuIGVtcHR5IGxpc3QpLgojb3BlbnNlYXJjaC5yZXF1ZXN0SGVhZGVyc1doaXRlbGlzdDogWyBhdXRob3JpemF0aW9uIF0KCiMgTGlzdCBvZiBPcGVuU2VhcmNoIERhc2hib2FyZHMgY2xpZW50LXNpZGUgaGVhZGVycyB0byBzZW5kIHRvIE9wZW5TZWFyY2guIFRvIHNlbmQgKm5vKiBjbGllbnQtc2lkZQojIGhlYWRlcnMsIHNldCB0aGlzIHZhbHVlIHRvIFtdIChhbiBlbXB0eSBsaXN0KS4KI29wZW5zZWFyY2gucmVxdWVzdEhlYWRlcnNBbGxvd2xpc3Q6IFsgYXV0aG9yaXphdGlvbiBdCgojIEhlYWRlciBuYW1lcyBhbmQgdmFsdWVzIHRoYXQgYXJlIHNlbnQgdG8gT3BlblNlYXJjaC4gQW55IGN1c3RvbSBoZWFkZXJzIGNhbm5vdCBiZSBvdmVyd3JpdHRlbgojIGJ5IGNsaWVudC1zaWRlIGhlYWRlcnMsIHJlZ2FyZGxlc3Mgb2YgdGhlIG9wZW5zZWFyY2gucmVxdWVzdEhlYWRlcnNBbGxvd2xpc3QgY29uZmlndXJhdGlvbi4KI29wZW5zZWFyY2guY3VzdG9tSGVhZGVyczoge30KCiMgVGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIE9wZW5TZWFyY2ggdG8gd2FpdCBmb3IgcmVzcG9uc2VzIGZyb20gc2hhcmRzLiBTZXQgdG8gMCB0byBkaXNhYmxlLgojb3BlbnNlYXJjaC5zaGFyZFRpbWVvdXQ6IDMwMDAwCgojIExvZ3MgcXVlcmllcyBzZW50IHRvIE9wZW5TZWFyY2guIFJlcXVpcmVzIGxvZ2dpbmcudmVyYm9zZSBzZXQgdG8gdHJ1ZS4KI29wZW5zZWFyY2gubG9nUXVlcmllczogZmFsc2UKCiMgRGlzYWJsZXMgZXJyb3JzIGZyb20gdGhlIE9wZW5TZWFyY2ggSlMgY2xpZW50IGFuZCBlbmFibGVzIHlvdSB0byB1dGlsaXplIHByb3RlY3RlZCB3b3JkcyBzdWNoIGFzOiAnYm9vbGVhbicsICdwcm90bycsICdjb25zdHJ1Y3RvcicuCiMgd2l0aGluIGNsdXN0ZXIuIEJ5IGRlZmF1bHQsIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyBhbmQgdGhlIGNsaWVudCB3aWxsIHByb3RlY3QgeW91IGFnYWluc3QgcHJvdG90eXBlIHBvaXNvbmluZyBhdHRhY2tzLgojIFdBUk5JTkc6IEluZGV4IHBhdHRlcm5zIGFyZSB1c2VyLXN1cHBsaWVkIGRhdGEuIERpc2FibGluZyB0aGlzIHdpbGwgcGxhY2UgdGhlIGV4cGVjdGF0aW9uIHRoYXQgeW91IGFyZSBoYW5kbGluZyB0aGUgZGF0YSBzYWZlbHkuCiNvcGVuc2VhcmNoLmRpc2FibGVQcm90b3R5cGVQb2lzb25pbmdQcm90ZWN0aW9uOiBmYWxzZQoKIyBTcGVjaWZpZXMgdGhlIHBhdGggd2hlcmUgT3BlblNlYXJjaCBEYXNoYm9hcmRzIGNyZWF0ZXMgdGhlIHByb2Nlc3MgSUQgZmlsZS4KI3BpZC5maWxlOiAvdmFyL3J1bi9vcGVuc2VhcmNoRGFzaGJvYXJkcy5waWQKCiMgRW5hYmxlcyB5b3UgdG8gc3BlY2lmeSBhIGZpbGUgd2hlcmUgT3BlblNlYXJjaCBEYXNoYm9hcmRzIHN0b3JlcyBsb2cgb3V0cHV0LgojbG9nZ2luZy5kZXN0OiBzdGRvdXQKCiMgU2V0IHRoZSB2YWx1ZSBvZiB0aGlzIHNldHRpbmcgdG8gdHJ1ZSB0byBzdXBwcmVzcyBhbGwgbG9nZ2luZyBvdXRwdXQuCiNsb2dnaW5nLnNpbGVudDogZmFsc2UKCiMgU2V0IHRoZSB2YWx1ZSBvZiB0aGlzIHNldHRpbmcgdG8gdHJ1ZSB0byBzdXBwcmVzcyBhbGwgbG9nZ2luZyBvdXRwdXQgb3RoZXIgdGhhbiBlcnJvciBtZXNzYWdlcy4KI2xvZ2dpbmcucXVpZXQ6IGZhbHNlCgojIFNldCB0aGUgdmFsdWUgb2YgdGhpcyBzZXR0aW5nIHRvIHRydWUgdG8gbG9nIGFsbCBldmVudHMsIGluY2x1ZGluZyBzeXN0ZW0gdXNhZ2UgaW5mb3JtYXRpb24KIyBhbmQgYWxsIHJlcXVlc3RzLgojbG9nZ2luZy52ZXJib3NlOiBmYWxzZQoKIyBTZXQgdGhlIGludGVydmFsIGluIG1pbGxpc2Vjb25kcyB0byBzYW1wbGUgc3lzdGVtIGFuZCBwcm9jZXNzIHBlcmZvcm1hbmNlCiMgbWV0cmljcy4gTWluaW11bSBpcyAxMDBtcy4gRGVmYXVsdHMgdG8gNTAwMC4KI29wcy5pbnRlcnZhbDogNTAwMAoKIyBTcGVjaWZpZXMgbG9jYWxlIHRvIGJlIHVzZWQgZm9yIGFsbCBsb2NhbGl6YWJsZSBzdHJpbmdzLCBkYXRlcyBhbmQgbnVtYmVyIGZvcm1hdHMuCiMgU3VwcG9ydGVkIGxhbmd1YWdlcyBhcmUgdGhlIGZvbGxvd2luZzogRW5nbGlzaCAtIGVuICwgYnkgZGVmYXVsdCAsIENoaW5lc2UgLSB6aC1DTiAuCiNpMThuLmxvY2FsZTogImVuIgoKIyBTZXQgdGhlIGFsbG93bGlzdCB0byBjaGVjayBpbnB1dCBncmFwaGl0ZSBVcmwuIEFsbG93bGlzdCBpcyB0aGUgZGVmYXVsdCBjaGVjayBsaXN0LgojdmlzX3R5cGVfdGltZWxpbmUuZ3JhcGhpdGVBbGxvd2VkVXJsczogWydodHRwczovL3d3dy5ob3N0ZWRncmFwaGl0ZS5jb20vVUlEL0FDQ0VTU19LRVkvZ3JhcGhpdGUnXQoKIyBTZXQgdGhlIGRlbnlsaXN0IHRvIGNoZWNrIGlucHV0IGdyYXBoaXRlIFVybC4gRGVueWxpc3QgaXMgYW4gSVAgbGlzdC4KIyBCZWxvdyBpcyBhbiBleGFtcGxlIGZvciByZWZlcmVuY2UKCiMgdmlzX3R5cGVfdGltZWxpbmUuZ3JhcGhpdGVCbG9ja2VkSVBzOiBbCiMgIC8vTG9vcGJhY2sKIyAgJzEyNy4wLjAuMC84JywKIyAgJzo6MS8xMjgnLAojICAvL0xpbmstbG9jYWwgQWRkcmVzcyBmb3IgSVB2NgojICAnZmU4MDo6LzEwJywKIyAgLy9Qcml2YXRlIElQIGFkZHJlc3MgZm9yIElQdjQKIyAgJzEwLjAuMC4wLzgnLAojICAnMTcyLjE2LjAuMC8xMicsCiMgICcxOTIuMTY4LjAuMC8xNicsCiMgIC8vVW5pcXVlIGxvY2FsIGFkZHJlc3MgKFVMQSkKIyAgJ2ZjMDA6Oi83JywKIyAgLy9SZXNlcnZlZCBJUCBhZGRyZXNzCiMgICcwLjAuMC4wLzgnLAojICAnMTAwLjY0LjAuMC8xMCcsCiMgICcxOTIuMC4wLjAvMjQnLAojICAnMTkyLjAuMi4wLzI0JywKIyAgJzE5OC4xOC4wLjAvMTUnLAojICAnMTkyLjg4Ljk5LjAvMjQnLAojICAnMTk4LjUxLjEwMC4wLzI0JywKIyAgJzIwMy4wLjExMy4wLzI0JywKIyAgJzIyNC4wLjAuMC80JywKIyAgJzI0MC4wLjAuMC80JywKIyAgJzI1NS4yNTUuMjU1LjI1NS8zMicsCiMgICc6Oi8xMjgnLAojICAnMjAwMTpkYjg6Oi8zMicsCiMgICdmZjAwOjovOCcsCiMgXQoKIyB2aXNfdHlwZV90aW1lbGluZS5ncmFwaGl0ZURlbmllZElQczogW10KCiMgdmlzX3R5cGVfdGltZWxpbmUuZ3JhcGhpdGVEZW5pZWRJUHM6IFsKIyAgLy9Mb29wYmFjawojICAnMTI3LjAuMC4wLzgnLAojICAnOjoxLzEyOCcsCiMgIC8vTGluay1sb2NhbCBBZGRyZXNzIGZvciBJUHY2CiMgICdmZTgwOjovMTAnLAojICAvL1ByaXZhdGUgSVAgYWRkcmVzcyBmb3IgSVB2NAojICAnMTAuMC4wLjAvOCcsCiMgICcxNzIuMTYuMC4wLzEyJywKIyAgJzE5Mi4xNjguMC4wLzE2JywKIyAgLy9VbmlxdWUgbG9jYWwgYWRkcmVzcyAoVUxBKQojICAnZmMwMDo6LzcnLAojICAvL1Jlc2VydmVkIElQIGFkZHJlc3MKIyAgJzAuMC4wLjAvOCcsCiMgICcxMDAuNjQuMC4wLzEwJywKIyAgJzE5Mi4wLjAuMC8yNCcsCiMgICcxOTIuMC4yLjAvMjQnLAojICAnMTk4LjE4LjAuMC8xNScsCiMgICcxOTIuODguOTkuMC8yNCcsCiMgICcxOTguNTEuMTAwLjAvMjQnLAojICAnMjAzLjAuMTEzLjAvMjQnLAojICAnMjI0LjAuMC4wLzQnLAojICAnMjQwLjAuMC4wLzQnLAojICAnMjU1LjI1NS4yNTUuMjU1LzMyJywKIyAgJzo6LzEyOCcsCiMgICcyMDAxOmRiODo6LzMyJywKIyAgJ2ZmMDA6Oi84JywKIyBdCgojIG9wZW5zZWFyY2hEYXNoYm9hcmRzLmJyYW5kaW5nOgojICAgbG9nbzoKIyAgICAgZGVmYXVsdFVybDogIiIKIyAgICAgZGFya01vZGVVcmw6ICIiCiMgICBtYXJrOgojICAgICBkZWZhdWx0VXJsOiAiIgojICAgICBkYXJrTW9kZVVybDogIiIKIyAgIGxvYWRpbmdMb2dvOgojICAgICBkZWZhdWx0VXJsOiAiIgojICAgICBkYXJrTW9kZVVybDogIiIKIyAgIGZhdmljb25Vcmw6ICIiCiMgICBhcHBsaWNhdGlvblRpdGxlOiAiIgojICAgdXNlRXhwYW5kZWRIZWFkZXI6IGZhbHNlCgojIFNldCB0aGUgdmFsdWUgb2YgdGhpcyBzZXR0aW5nIHRvIHRydWUgdG8gY2FwdHVyZSByZWdpb24gZGVuaWVkIHdhcm5pbmdzIGFuZCBlcnJvcnMKIyBmb3IgeW91ciBtYXAgcmVuZGVyaW5nIHNlcnZpY2VzLgoKIyBtYXAuc2hvd1JlZ2lvbkRlbmllZFdhcm5pbmc6IGZhbHNlCgojIFNldCB0aGUgdmFsdWUgb2YgdGhpcyBzZXR0aW5nIHRvIGZhbHNlIHRvIHN1cHByZXNzIHNlYXJjaCB1c2FnZSB0ZWxlbWV0cnkKIyBmb3IgcmVkdWNpbmcgdGhlIGxvYWQgb2YgT3BlblNlYXJjaCBjbHVzdGVyLgojIGRhdGEuc2VhcmNoLnVzYWdlVGVsZW1ldHJ5LmVuYWJsZWQ6IGZhbHNlCgojIFNldCB0aGUgdmFsdWUgb2YgdGhpcyBzZXR0aW5nIHRvIGZhbHNlIHRvIGRpc2FibGUgVmlzQnVpbGRlcgojIGZ1bmN0aW9uYWxpdHkgaW4gVmlzdWFsaXphdGlvbi4KIyB2aXNfYnVpbGRlci5lbmFibGVkOiBmYWxzZQoKIyBTZXQgdGhlIHZhbHVlIG9mIHRoaXMgc2V0dGluZyB0byB0cnVlIHRvIGVuYWJsZSBtdWx0aXBsZSBkYXRhIHNvdXJjZSBmZWF0dXJlLgojZGF0YV9zb3VyY2UuZW5hYmxlZDogZmFsc2UKIyBTZXQgdGhlIHZhbHVlIG9mIHRoZXNlIHNldHRpbmdzIHRvIGN1c3RvbWl6ZSBjcnlwdG8gbWF0ZXJpYWxzIHRvIGVuY3J5cHRpb24gc2F2ZWQgY3JlZGVudGlhbHMKIyBpbiBkYXRhIHNvdXJjZXMuCiNkYXRhX3NvdXJjZS5lbmNyeXB0aW9uLndyYXBwaW5nS2V5TmFtZTogJ2NoYW5nZW1lJwojZGF0YV9zb3VyY2UuZW5jcnlwdGlvbi53cmFwcGluZ0tleU5hbWVzcGFjZTogJ2NoYW5nZW1lJwojZGF0YV9zb3VyY2UuZW5jcnlwdGlvbi53cmFwcGluZ0tleTogWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0KCiNkYXRhX3NvdXJjZS5lbmRwb2ludERlbmllZElQczogWwojICAgICcxMjcuMC4wLjAvOCcsCiMgICAgJzo6MS8xMjgnLAojICAgICcxNjkuMjU0LjAuMC8xNicsCiMgICAgJ2ZlODA6Oi8xMCcsCiMgICAgJzEwLjAuMC4wLzgnLAojICAgICcxNzIuMTYuMC4wLzEyJywKIyAgICAnMTkyLjE2OC4wLjAvMTYnLAojICAgICdmYzAwOjovNycsCiMgICAgJzAuMC4wLjAvOCcsCiMgICAgJzEwMC42NC4wLjAvMTAnLAojICAgICcxOTIuMC4wLjAvMjQnLAojICAgICcxOTIuMC4yLjAvMjQnLAojICAgICcxOTguMTguMC4wLzE1JywKIyAgICAnMTkyLjg4Ljk5LjAvMjQnLAojICAgICcxOTguNTEuMTAwLjAvMjQnLAojICAgICcyMDMuMC4xMTMuMC8yNCcsCiMgICAgJzIyNC4wLjAuMC80JywKIyAgICAnMjQwLjAuMC4wLzQnLAojICAgICcyNTUuMjU1LjI1NS4yNTUvMzInLAojICAgICc6Oi8xMjgnLAojICAgICcyMDAxOmRiODo6LzMyJywKIyAgICAnZmYwMDo6LzgnLAojIF0KCiMgU2V0IHRoZSB2YWx1ZSBvZiB0aGlzIHNldHRpbmcgdG8gZmFsc2UgdG8gaGlkZSB0aGUgaGVscCBtZW51IGxpbmsgdG8gdGhlIE9wZW5TZWFyY2ggRGFzaGJvYXJkcyB1c2VyIHN1cnZleQojIG9wZW5zZWFyY2hEYXNoYm9hcmRzLnN1cnZleS51cmw6ICJodHRwczovL3N1cnZleS5vcGVuc2VhcmNoLm9yZyIKaTE4bi5sb2NhbGU6ICJlbl9FTiIKb3BlbnNlYXJjaERhc2hib2FyZHMuYnJhbmRpbmc6CiAgIGFwcGxpY2F0aW9uVGl0bGU6ICLQn9CaINCe0JIg0KPQoyIKICAgZmF2aWNvblVybDogImh0dHA6Ly8xOTIuMTY4LjYuMjM1OjU2MDEvdWkvYXNzZXRzL21pa2hhaWxfdHJhbnNwYXJlbnQucG5nIgogICB1c2VFeHBhbmRlZEhlYWRlcjogZmFsc2UKICAgbG9nbzoKICAgICBkZWZhdWx0VXJsOiAiaHR0cDovLzE5Mi4xNjguNi4yMzU6NTYwMS91aS9hc3NldHMvbWlraGFpbF90cmFuc3BhcmVudC5wbmciCiAgIG1hcms6CiAgICAgZGVmYXVsdFVybDogImh0dHA6Ly8xOTIuMTY4LjYuMjM1OjU2MDEvdWkvYXNzZXRzL21pa2hhaWxfdHJhbnNwYXJlbnQucG5nIgogICBsb2FkaW5nTG9nbzoKICAgICBkZWZhdWx0VXJsOiAiaHR0cDovLzE5Mi4xNjguNi4yMzU6NTYwMS91aS9hc3NldHMvbWlraGFpbF90cmFuc3BhcmVudC5wbmciCiMgQmFzaWMgYXV0aGVudGljYXRpb24gY3VzdG9taXphdGlvbiAjCm9wZW5zZWFyY2hfc2VjdXJpdHkudWkuYmFzaWNhdXRoLmxvZ2luLmJyYW5kaW1hZ2U6ICJodHRwOi8vMTkyLjE2OC42LjIzNTo1NjAxL3VpL2Fzc2V0cy9taWtoYWlsX3RyYW5zcGFyZW50LnBuZyIKb3BlbnNlYXJjaF9zZWN1cml0eS51aS5iYXNpY2F1dGgubG9naW4uc2hvd2JyYW5kaW1hZ2U6IHRydWUKIyBPSURDIGF1dGggY3VzdG9taXphdGlvbiBhbmQgc3RhcnQgc2V0dGluZ3MgIwojb3BlbnNlYXJjaF9zZWN1cml0eS51aS5vcGVuaWQubG9naW4uYnV0dG9ubmFtZTogINCf0KHQo9ChICBpbiB3aXRoIDxJZFAgbmFtZSBvciBvdGhlcj4Kb3BlbnNlYXJjaF9zZWN1cml0eS51aS5vcGVuaWQubG9naW4uYnJhbmRpbWFnZTogImh0dHA6Ly8xOTIuMTY4LjYuMjM1OjU2MDEvdWkvYXNzZXRzL21pa2hhaWxfdHJhbnNwYXJlbnQucG5nIgpvcGVuc2VhcmNoX3NlY3VyaXR5LnVpLm9wZW5pZC5sb2dpbi5zaG93YnJhbmRpbWFnZTogdHJ1ZQo=",
};

const decodedContent = new TextDecoder().decode(
    base64ToBytes(response.content)
);
// console.log("Декодированная строка: ");
// console.log(decodedContent);

const jsObject = yamlToJS(decodedContent);
console.log(jsObject); // Вывод JavaScript объекта без комментариев

const exampleYaml = decodedContent;

const yamlLinter = linter((view) => {
    const diagnostics = [];

    try {
        parser.load(view.state.doc);
    } catch (e) {
        const loc = e.mark;
        const from = loc ? loc.position : 0;
        const to = from;
        const severity = "error";

        diagnostics.push({
            from,
            to,
            message: e.message,
            severity
        });
    }

    return diagnostics;
});

const ElasticYaml = () => {
    const [editorContent, setEditorContent] = useState("");

    const response = ""; // Замените это на ваш фактический ответ

    useEffect(() => {
        setEditorContent(response); // Предполагается, что response уже содержит yaml-строку
    }, [response]);

    const handleChangeEditor = useCallback((val, viewUpdate) => {
        console.log('val:', val);
        setEditorContent(val);
    }, []);

    return (
        <EuiProvider colorMode="light">
            <EuiFlexGroup style={{ padding: "16px" }}>
                <EuiFlexItem>
                    <div>Редактор</div>
                    <CodeMirror
                        height="100%"
                        value={editorContent || exampleYaml} // Если editorContent пуст, используйте пример yaml
                        theme={githubLight}
                        extensions={[yaml, lintGutter(), yamlLinter]}
                        onChange={handleChangeEditor}
                    />
                </EuiFlexItem>
            </EuiFlexGroup>
        </EuiProvider>
    );
};

export default ElasticYaml;