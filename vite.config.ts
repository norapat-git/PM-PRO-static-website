import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  server: {
    host: true,
    allowedHosts: true,
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  build: {
    rollupOptions: {
      input: {
        // Main pages
        main: resolve(rootDir, 'index.html'),
        contact: resolve(rootDir, 'contact.html'),

        // On-Site Service pages (in /services/)
        services: resolve(rootDir, 'services/index.html'),
        onsiteService: resolve(rootDir, 'services/onsite-service.html'),
        headboxService: resolve(rootDir, 'services/headbox-service.html'),
        alignmentService: resolve(rootDir, 'services/alignment-service.html'),
        nipTestTuning: resolve(rootDir, 'services/nip-test-tuning.html'),
        cdProfileSystem: resolve(rootDir, 'services/cd-profile-system.html'),
        grindingCoating: resolve(rootDir, 'services/grinding-coating-service.html'),
        otherService: resolve(rootDir, 'services/other-service.html'),

        // Machine / Equipment / Part pages (in /equipment/)
        equipment: resolve(rootDir, 'equipment/index.html'),
        machineEquipment: resolve(rootDir, 'equipment/machine-equipment.html'),
        headboxLips: resolve(rootDir, 'equipment/headbox-lips.html'),
        superfinishingMachine: resolve(rootDir, 'equipment/superfinishing-machine.html'),
        bladeAngleMeter: resolve(rootDir, 'equipment/blade-angle-meter.html'),
        rollAndCover: resolve(rootDir, 'equipment/roll-and-cover.html'),
        cdProfilingComponent: resolve(rootDir, 'equipment/cd-profiling-component.html'),
        machineryWaterTreatment: resolve(rootDir, 'equipment/machinery-water-treatment.html'),
        fabricCleanerTailSystem: resolve(rootDir, 'equipment/fabric-cleaner-tail-system.html'),
      },
    },
  },
});
