import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        contact: resolve(rootDir, 'contact.html'),
        // On-Site Service pages
        headboxService: resolve(rootDir, 'headbox-service.html'),
        alignmentService: resolve(rootDir, 'alignment-service.html'),
        nipTestTuning: resolve(rootDir, 'nip-test-tuning.html'),
        cdProfileSystem: resolve(rootDir, 'cd-profile-system.html'),
        grindingCoating: resolve(rootDir, 'grinding-coating-service.html'),
        otherService: resolve(rootDir, 'other-service.html'),
        // Machine / Equipment / Part pages
        headboxLips: resolve(rootDir, 'headbox-lips.html'),
        superfinishingMachine: resolve(rootDir, 'superfinishing-machine.html'),
        bladeAngleMeter: resolve(rootDir, 'blade-angle-meter.html'),
        rollAndCover: resolve(rootDir, 'roll-and-cover.html'),
        cdProfilingComponent: resolve(rootDir, 'cd-profiling-component.html'),
        machineryWaterTreatment: resolve(rootDir, 'machinery-water-treatment.html'),
        fabricCleanerTailSystem: resolve(rootDir, 'fabric-cleaner-tail-system.html'),
      },
    },
  },
});
